from pathlib import Path

from PIL import Image, ImageDraw


OUT = Path("public/assets/favicon.ico")
SIZES = [16, 32, 48, 64, 128, 256]
NIGHT = (8, 23, 34, 255)
GOLD = (203, 187, 160, 255)
EARTH = (123, 106, 88, 255)


def draw_icon(size):
    image = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(image)
    pad = max(1, size // 16)

    draw.rounded_rectangle(
        (pad, pad, size - pad - 1, size - pad - 1),
        radius=max(3, size // 7),
        fill=NIGHT,
        outline=GOLD,
        width=max(1, size // 24),
    )

    base = size * 0.7
    draw.polygon(
        [(size * 0.2, base), (size * 0.5, size * 0.18), (size * 0.8, base)],
        fill=GOLD,
    )
    draw.polygon(
        [(size * 0.34, base), (size * 0.53, size * 0.38), (size * 0.72, base)],
        fill=EARTH,
    )
    draw.ellipse((size * 0.43, size * 0.12, size * 0.57, size * 0.26), fill=GOLD)
    draw.rectangle((size * 0.27, size * 0.74, size * 0.73, size * 0.8), fill=GOLD)
    return image


images = [draw_icon(size) for size in SIZES]
OUT.parent.mkdir(parents=True, exist_ok=True)
images[-1].save(OUT, sizes=[(size, size) for size in SIZES], append_images=images[:-1])
print(OUT)
