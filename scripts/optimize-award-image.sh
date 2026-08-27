#!/usr/bin/env bash
# Compress a photo for the awards section.
#
#   scripts/optimize-award-image.sh <source-image> <slug> [ffmpeg-filter]
#
# Writes public/awards/<slug>.webp and prints its dimensions and size, ready to
# paste into the `photo` block in data/awards.ts.
#
# The optional third argument is an ffmpeg -vf filter chain, used to crop before
# compressing. The photos already in public/awards were made with:
#
#   ... hitb-2022        'crop=1010:568:128:0'
#       (drops the livestream pillarbox bars and the "Live chat" pill)
#   ... spiritcyber-2024 'crop=3986:2234:0:756,scale=1200:-2'
#       (trims the empty ceiling above the banner to reach 16:9)
#
# Aim for 16:9 — the awards grid renders each photo in an aspect-video box, so
# anything else gets centre-cropped.
set -euo pipefail

src=${1:?usage: optimize-award-image.sh <source-image> <slug> [ffmpeg-filter]}
slug=${2:?usage: optimize-award-image.sh <source-image> <slug> [ffmpeg-filter]}
filter=${3:-scale='min(1200,iw)':-2}

out_dir="$(cd "$(dirname "$0")/.." && pwd)/public/awards"
mkdir -p "$out_dir"
out="$out_dir/$slug.webp"
tmp="$(mktemp -d)/frame.png"

ffmpeg -loglevel error -y -i "$src" -vf "$filter" "$tmp"
cwebp -quiet -q 82 -m 6 -mt "$tmp" -o "$out"
rm -rf "$(dirname "$tmp")"

printf '%s  ' "$out"
sips -g pixelWidth -g pixelHeight "$out" | awk '/pixel/ {printf "%s ", $2}'
du -h "$out" | cut -f1
