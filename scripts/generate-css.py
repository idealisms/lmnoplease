CELLS = 15
BOARD_BORDER = 8  # 4px on each side
CLUES_WIDTH = 320

# 64 is the default so we don't need to generate a rule for it.
# 23px x 23px is the smallest square.
# The first size that matches wins so we order descending.
for w in range(63, 22, -1):
    width = w * 15 + 14
    max_width = width + BOARD_BORDER + CLUES_WIDTH + w - 1
    print(f"@media (max-width: {max_width}px) {{")
    print(f"  .board {{")
    print(f"    width: {width}px;")
    print(f"    height: {width}px;")
    print(f"  }}")
    print(f"}}")
    