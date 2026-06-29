#!/usr/bin/env python3
"""Termi Protocol - representative example (Python).

Prints the public roadmap chapters. Illustrative only.
Full app: https://termiprotocol.com
"""

SITE = "https://termiprotocol.com"

PROTOCOLS = [
    ("01", "Milano", "Live"),
    ("02", "Istanbul", "Roadmap"),
    ("03", "London", "Roadmap"),
    ("04", "Madrid", "Roadmap"),
    ("05", "Paris", "Roadmap"),
    ("06", "Mexico City", "Roadmap"),
    ("07", "Cairo", "Roadmap"),
    ("08", "Moscow", "Roadmap"),
    ("09", "Giza Pyramid", "Roadmap"),
]


def main() -> None:
    print("Termi Protocol - roadmap")
    for chapter, name, status in PROTOCOLS:
        print(f"  {chapter}  {name:<14} {status}")
    print(f"\nFull roadmap -> {SITE}/roadmap")


if __name__ == "__main__":
    main()
