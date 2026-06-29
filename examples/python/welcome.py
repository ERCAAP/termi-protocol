#!/usr/bin/env python3
"""Termi Protocol - tiny representative example (Python).

This is NOT the application source. It is a minimal, illustrative
snippet for people exploring the repo. The full 3D desktop app
(macOS + Windows) lives at:

    https://termiprotocol.com
"""

SITE = "https://termiprotocol.com"

BANNER = r"""
 _____                   _   ____            _                  _
|_   _|__ _ __ _ __ ___ (_) |  _ \ _ __ ___ | |_ ___   ___ ___ | |
  | |/ _ \ '__| '_ ` _ \| | | |_) | '__/ _ \| __/ _ \ / __/ _ \| |
  | |  __/ |  | | | | | | | |  __/| | | (_) | || (_) | (_| (_) | |
  |_|\___|_|  |_| |_| |_|_| |_|   |_|  \___/ \__\___/ \___\___/|_|
"""


def main() -> None:
    print(BANNER)
    print("Watch AI coding agents build in a cozy 3D workspace.")
    print(f"Get the app -> {SITE}")


if __name__ == "__main__":
    main()
