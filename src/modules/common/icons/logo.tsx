import React from "react"
import { IconProps } from "types/icon"

const Logo: React.FC<IconProps> = ({
  size = "151",
  color = "#9CA3AF",
  ...attributes
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 151 151"
      width={size}
      height={size}
      {...attributes}
    >
      <path
        fill="#461404"
        d="
M 70.69 12.02
Q 78.75 13.80 81.30 16.68
Q 83.24 18.87 85.68 21.16
Q 86.03 21.49 86.37 22.19
Q 87.00 24.12 87.84 25.95
C 90.35 31.44 90.83 37.45 89.53 43.43
Q 89.36 44.18 89.92 43.65
C 93.57 40.18 96.35 37.33 101.52 35.39
Q 103.04 35.37 104.32 34.21
L 109.18 33.58
Q 111.58 34.94 113.17 33.89
L 116.77 35.21
Q 118.07 36.44 119.52 37.41
Q 121.15 38.50 122.12 39.72
Q 124.59 42.84 125.12 47.16
Q 125.79 52.61 123.55 58.02
Q 122.95 59.46 120.03 64.65
L 116.93 67.66
Q 115.33 68.52 113.75 69.49
C 109.88 71.86 105.22 73.32 100.70 74.18
A 0.26 0.26 0.0 0 0 100.74 74.70
L 118.68 75.68
Q 123.74 76.17 125.01 76.68
Q 138.64 82.08 142.89 95.67
Q 144.13 99.61 143.13 103.34
C 140.32 113.84 129.92 117.02 119.90 115.91
Q 116.28 114.37 112.40 114.32
L 108.08 112.77
Q 108.21 112.79 108.20 112.56
Q 108.20 112.41 108.07 112.36
Q 102.76 110.28 97.10 106.73
Q 96.20 106.17 96.75 107.08
Q 98.82 110.57 99.94 113.77
Q 101.24 117.50 101.23 123.35
Q 101.41 124.36 100.82 125.10
Q 98.16 136.44 89.60 140.31
C 85.83 142.03 82.03 141.84 78.29 140.17
Q 72.20 137.43 69.72 132.47
A 0.60 0.54 88.4 0 0 69.50 132.24
Q 68.91 131.90 68.57 132.51
L 65.57 126.86
L 62.28 114.81
Q 62.14 114.29 61.93 114.78
L 58.59 122.45
Q 58.68 122.97 58.55 123.19
Q 55.95 127.29 51.49 129.13
Q 46.58 131.15 39.64 131.45
Q 35.96 131.61 31.43 128.45
A 0.06 0.06 0.0 0 0 31.34 128.48
Q 31.29 128.61 31.24 128.73
L 29.25 126.93
Q 28.77 125.45 28.17 124.12
Q 27.46 122.53 27.31 121.26
Q 26.84 117.30 27.05 112.96
Q 29.37 105.85 35.53 101.18
L 41.70 98.13
Q 42.18 97.89 41.65 97.83
L 33.48 96.91
C 30.96 96.14 28.25 95.93 25.91 95.11
Q 22.22 93.83 18.73 92.53
Q 14.76 91.04 9.65 86.84
C 7.18 84.81 4.17 80.49 5.05 77.11
Q 5.39 75.81 4.86 75.15
Q 7.75 70.29 12.83 69.19
Q 13.33 69.08 19.85 68.30
Q 23.43 67.87 27.08 68.08
Q 27.31 68.09 27.47 67.93
L 27.67 67.73
Q 28.25 68.78 29.64 68.46
Q 30.22 68.33 29.85 67.87
Q 28.61 66.35 26.78 66.02
L 23.65 64.01
Q 21.44 61.52 18.98 59.43
Q 14.89 55.94 12.95 50.91
Q 11.79 47.91 12.10 45.03
Q 12.45 41.85 14.41 39.51
Q 15.88 37.75 18.49 36.33
Q 19.17 35.96 21.66 35.45
Q 23.38 35.11 24.72 33.80
Q 29.89 32.98 35.48 34.30
C 38.49 35.01 41.36 36.69 44.17 38.16
L 50.72 42.01
Q 51.16 42.27 51.02 41.78
Q 49.17 35.63 50.25 29.54
Q 51.14 28.17 50.82 26.78
Q 51.14 25.20 51.85 24.39
Q 54.47 20.25 57.52 17.02
Q 57.75 16.79 57.47 16.34
Q 58.00 15.81 58.22 15.94
L 58.46 16.05
Q 58.50 16.07 58.55 16.04
L 67.19 12.19
Q 68.96 11.29 70.69 12.02
Z
M 53.35 27.57
Q 50.92 36.02 54.21 43.29
Q 55.42 45.96 57.96 48.34
Q 64.45 54.42 68.62 62.06
Q 69.32 63.34 68.14 62.48
Q 60.19 56.74 56.14 50.65
C 52.68 45.45 47.99 41.91 42.47 39.54
Q 42.20 39.43 42.10 40.05
Q 42.15 39.71 42.02 39.45
A 0.84 0.84 0.0 0 0 41.21 38.99
Q 40.23 39.06 39.36 38.74
Q 36.97 37.85 34.53 36.97
Q 32.72 36.32 30.27 36.39
Q 27.98 36.45 25.86 36.50
Q 22.18 35.61 18.72 37.90
Q 13.37 41.44 14.19 48.02
Q 14.51 50.57 16.55 52.26
Q 18.81 55.70 23.00 59.02
Q 27.90 62.90 29.46 64.02
L 31.51 65.41
Q 35.57 67.90 37.26 68.00
Q 49.13 68.70 60.74 71.89
A 0.86 0.85 28.5 0 0 61.60 71.64
Q 66.95 65.69 74.00 65.32
C 79.37 65.05 83.53 67.78 85.44 72.77
Q 85.63 73.28 86.19 73.27
Q 93.27 73.06 100.25 71.83
Q 109.89 70.14 116.56 64.19
Q 117.41 62.50 118.28 61.82
Q 120.10 60.28 121.78 56.53
Q 123.48 52.72 122.91 49.76
L 122.64 47.11
Q 122.74 43.14 119.66 40.37
Q 119.70 40.70 119.40 40.37
Q 119.76 39.81 118.99 39.38
C 117.60 38.60 116.06 37.12 114.17 36.67
Q 108.70 35.38 103.30 36.92
C 94.99 40.05 89.31 48.23 86.34 56.41
Q 84.81 60.62 82.54 65.38
Q 82.16 66.18 81.32 65.87
L 80.94 65.73
A 1.21 1.20 21.0 0 1 80.24 64.16
Q 82.92 57.50 85.58 51.06
C 88.85 43.17 89.55 32.26 84.60 24.58
A 0.37 0.35 81.9 0 0 84.41 24.43
Q 84.07 24.29 84.05 24.55
Q 84.04 24.06 83.79 23.49
Q 83.97 23.59 84.06 23.43
Q 84.14 23.27 84.04 23.12
Q 82.17 20.29 79.51 18.15
Q 78.91 17.68 78.38 18.04
Q 78.58 18.02 78.03 17.62
Q 78.21 17.24 77.96 17.05
Q 75.11 14.81 71.62 14.95
Q 71.50 14.95 71.47 15.07
Q 71.43 15.19 71.40 15.32
L 70.38 14.96
Q 68.99 14.37 67.98 14.47
Q 67.17 14.54 64.97 15.22
Q 63.37 15.72 62.16 16.49
Q 55.81 20.52 53.35 27.57
Z
M 24.96 70.55
Q 20.61 71.03 16.14 71.38
Q 12.34 71.67 7.97 74.77
Q 5.93 76.79 6.70 79.28
Q 7.86 82.99 11.43 85.79
Q 20.44 92.86 31.95 93.87
Q 44.36 95.84 49.02 95.46
Q 52.00 95.21 54.94 94.92
Q 55.58 94.86 55.60 94.21
C 55.76 87.18 56.25 80.58 59.47 74.26
A 0.51 0.50 -79.5 0 0 58.97 73.53
C 51.42 74.24 44.09 72.90 36.78 70.50
C 35.00 69.92 33.05 69.95 31.22 69.99
L 30.95 69.87
Q 30.77 69.78 30.57 69.81
L 24.96 70.55
Z
M 110.21 110.51
L 112.56 111.20
Q 115.73 113.16 119.06 112.55
Q 128.54 114.44 135.31 109.31
Q 143.14 103.36 138.63 93.63
Q 132.66 80.78 117.97 78.10
Q 106.86 76.29 94.99 76.50
Q 90.98 76.58 86.94 76.12
A 0.94 0.93 -87.3 0 0 85.91 77.06
Q 85.97 84.61 81.10 90.01
A 0.65 0.64 -50.3 0 0 81.18 90.95
Q 84.47 93.55 87.52 96.65
C 93.38 102.61 101.12 107.13 108.81 110.26
Q 109.21 110.43 109.65 110.41
Q 109.95 110.40 110.21 110.51
Z
M 69.15 128.39
L 73.06 133.79
Q 74.78 136.96 77.48 138.29
C 82.58 140.81 88.98 140.12 92.90 135.58
Q 94.24 134.02 95.52 132.51
Q 97.75 129.88 97.96 125.45
L 98.07 123.47
Q 98.19 123.39 98.36 123.37
Q 98.68 123.33 98.69 123.01
C 98.78 116.42 96.87 111.22 93.04 105.85
C 89.48 100.87 84.16 97.10 79.74 92.80
Q 79.14 92.22 78.47 92.71
C 74.39 95.72 69.00 96.98 63.92 97.65
Q 63.17 97.75 63.20 98.51
C 63.41 103.34 62.65 107.47 63.64 112.49
Q 65.32 120.98 69.15 128.39
Z
M 37.01 103.12
Q 29.06 110.28 29.09 120.15
Q 30.91 127.54 38.55 128.82
Q 38.75 128.86 38.91 128.80
Q 39.35 128.66 39.13 128.48
Q 39.72 128.73 39.88 128.56
Q 42.16 129.43 44.88 128.63
Q 51.36 126.71 55.26 122.07
Q 56.34 121.08 56.29 119.48
Q 55.98 109.07 55.78 98.50
A 0.56 0.56 0.0 0 0 55.26 97.95
Q 44.86 97.00 37.01 103.12
Z"
      />
      <clipPath id="clipping-path-1">
        <path
          d="
M 53.35 27.57
Q 50.92 36.02 54.21 43.29
Q 55.42 45.96 57.96 48.34
Q 64.45 54.42 68.62 62.06
Q 69.32 63.34 68.14 62.48
Q 60.19 56.74 56.14 50.65
C 52.68 45.45 47.99 41.91 42.47 39.54
Q 42.20 39.43 42.10 40.05
Q 42.15 39.71 42.02 39.45
A 0.84 0.84 0.0 0 0 41.21 38.99
Q 40.23 39.06 39.36 38.74
Q 36.97 37.85 34.53 36.97
Q 32.72 36.32 30.27 36.39
Q 27.98 36.45 25.86 36.50
Q 22.18 35.61 18.72 37.90
Q 13.37 41.44 14.19 48.02
Q 14.51 50.57 16.55 52.26
Q 18.81 55.70 23.00 59.02
Q 27.90 62.90 29.46 64.02
L 31.51 65.41
Q 35.57 67.90 37.26 68.00
Q 49.13 68.70 60.74 71.89
A 0.86 0.85 28.5 0 0 61.60 71.64
Q 66.95 65.69 74.00 65.32
C 79.37 65.05 83.53 67.78 85.44 72.77
Q 85.63 73.28 86.19 73.27
Q 93.27 73.06 100.25 71.83
Q 109.89 70.14 116.56 64.19
Q 117.41 62.50 118.28 61.82
Q 120.10 60.28 121.78 56.53
Q 123.48 52.72 122.91 49.76
L 122.64 47.11
Q 122.74 43.14 119.66 40.37
Q 119.70 40.70 119.40 40.37
Q 119.76 39.81 118.99 39.38
C 117.60 38.60 116.06 37.12 114.17 36.67
Q 108.70 35.38 103.30 36.92
C 94.99 40.05 89.31 48.23 86.34 56.41
Q 84.81 60.62 82.54 65.38
Q 82.16 66.18 81.32 65.87
L 80.94 65.73
A 1.21 1.20 21.0 0 1 80.24 64.16
Q 82.92 57.50 85.58 51.06
C 88.85 43.17 89.55 32.26 84.60 24.58
A 0.37 0.35 81.9 0 0 84.41 24.43
Q 84.07 24.29 84.05 24.55
Q 84.04 24.06 83.79 23.49
Q 83.97 23.59 84.06 23.43
Q 84.14 23.27 84.04 23.12
Q 82.17 20.29 79.51 18.15
Q 78.91 17.68 78.38 18.04
Q 78.58 18.02 78.03 17.62
Q 78.21 17.24 77.96 17.05
Q 75.11 14.81 71.62 14.95
Q 71.50 14.95 71.47 15.07
Q 71.43 15.19 71.40 15.32
L 70.38 14.96
Q 68.99 14.37 67.98 14.47
Q 67.17 14.54 64.97 15.22
Q 63.37 15.72 62.16 16.49
Q 55.81 20.52 53.35 27.57
Z
M 24.96 70.55
Q 20.61 71.03 16.14 71.38
Q 12.34 71.67 7.97 74.77
Q 5.93 76.79 6.70 79.28
Q 7.86 82.99 11.43 85.79
Q 20.44 92.86 31.95 93.87
Q 44.36 95.84 49.02 95.46
Q 52.00 95.21 54.94 94.92
Q 55.58 94.86 55.60 94.21
C 55.76 87.18 56.25 80.58 59.47 74.26
A 0.51 0.50 -79.5 0 0 58.97 73.53
C 51.42 74.24 44.09 72.90 36.78 70.50
C 35.00 69.92 33.05 69.95 31.22 69.99
L 30.95 69.87
Q 30.77 69.78 30.57 69.81
L 24.96 70.55
Z
M 110.21 110.51
L 112.56 111.20
Q 115.73 113.16 119.06 112.55
Q 128.54 114.44 135.31 109.31
Q 143.14 103.36 138.63 93.63
Q 132.66 80.78 117.97 78.10
Q 106.86 76.29 94.99 76.50
Q 90.98 76.58 86.94 76.12
A 0.94 0.93 -87.3 0 0 85.91 77.06
Q 85.97 84.61 81.10 90.01
A 0.65 0.64 -50.3 0 0 81.18 90.95
Q 84.47 93.55 87.52 96.65
C 93.38 102.61 101.12 107.13 108.81 110.26
Q 109.21 110.43 109.65 110.41
Q 109.95 110.40 110.21 110.51
Z
M 69.15 128.39
L 73.06 133.79
Q 74.78 136.96 77.48 138.29
C 82.58 140.81 88.98 140.12 92.90 135.58
Q 94.24 134.02 95.52 132.51
Q 97.75 129.88 97.96 125.45
L 98.07 123.47
Q 98.19 123.39 98.36 123.37
Q 98.68 123.33 98.69 123.01
C 98.78 116.42 96.87 111.22 93.04 105.85
C 89.48 100.87 84.16 97.10 79.74 92.80
Q 79.14 92.22 78.47 92.71
C 74.39 95.72 69.00 96.98 63.92 97.65
Q 63.17 97.75 63.20 98.51
C 63.41 103.34 62.65 107.47 63.64 112.49
Q 65.32 120.98 69.15 128.39
Z
M 37.01 103.12
Q 29.06 110.28 29.09 120.15
Q 30.91 127.54 38.55 128.82
Q 38.75 128.86 38.91 128.80
Q 39.35 128.66 39.13 128.48
Q 39.72 128.73 39.88 128.56
Q 42.16 129.43 44.88 128.63
Q 51.36 126.71 55.26 122.07
Q 56.34 121.08 56.29 119.48
Q 55.98 109.07 55.78 98.50
A 0.56 0.56 0.0 0 0 55.26 97.95
Q 44.86 97.00 37.01 103.12
Z"
        />
      </clipPath>
      <g
        stroke-width="2.00"
        fill="none"
        stroke-linecap="butt"
        clip-path="url(#clipping-path-1)"
      >
        <path
          stroke="#767a78"
          vector-effect="non-scaling-stroke"
          d="
M 53.35 27.57
Q 50.92 36.02 54.21 43.29
Q 55.42 45.96 57.96 48.34
Q 64.45 54.42 68.62 62.06
Q 69.32 63.34 68.14 62.48
Q 60.19 56.74 56.14 50.65
C 52.68 45.45 47.99 41.91 42.47 39.54
Q 42.20 39.43 42.10 40.05"
        />
        <path
          stroke="#703311"
          vector-effect="non-scaling-stroke"
          d="
M 25.86 36.50
Q 22.18 35.61 18.72 37.90
Q 13.37 41.44 14.19 48.02
Q 14.51 50.57 16.55 52.26"
        />
        <path
          stroke="#703311"
          vector-effect="non-scaling-stroke"
          d="
M 29.46 64.02
L 31.51 65.41"
        />
        <path
          stroke="#767a78"
          vector-effect="non-scaling-stroke"
          d="
M 31.51 65.41
Q 35.57 67.90 37.26 68.00
Q 49.13 68.70 60.74 71.89
A 0.86 0.85 28.5 0 0 61.60 71.64
Q 66.95 65.69 74.00 65.32
C 79.37 65.05 83.53 67.78 85.44 72.77
Q 85.63 73.28 86.19 73.27
Q 93.27 73.06 100.25 71.83
Q 109.89 70.14 116.56 64.19"
        />
        <path
          stroke="#703311"
          vector-effect="non-scaling-stroke"
          d="
M 118.28 61.82
Q 120.10 60.28 121.78 56.53
Q 123.48 52.72 122.91 49.76"
        />
        <path
          stroke="#703311"
          vector-effect="non-scaling-stroke"
          d="
M 122.64 47.11
Q 122.74 43.14 119.66 40.37"
        />
        <path
          stroke="#703311"
          vector-effect="non-scaling-stroke"
          d="
M 119.40 40.37
Q 119.76 39.81 118.99 39.38
C 117.60 38.60 116.06 37.12 114.17 36.67
Q 108.70 35.38 103.30 36.92"
        />
        <path
          stroke="#767a78"
          vector-effect="non-scaling-stroke"
          d="
M 103.30 36.92
C 94.99 40.05 89.31 48.23 86.34 56.41
Q 84.81 60.62 82.54 65.38
Q 82.16 66.18 81.32 65.87
L 80.94 65.73
A 1.21 1.20 21.0 0 1 80.24 64.16
Q 82.92 57.50 85.58 51.06
C 88.85 43.17 89.55 32.26 84.60 24.58
A 0.37 0.35 81.9 0 0 84.41 24.43
Q 84.07 24.29 84.05 24.55"
        />
        <path
          stroke="#703311"
          vector-effect="non-scaling-stroke"
          d="
M 83.79 23.49
Q 83.97 23.59 84.06 23.43
Q 84.14 23.27 84.04 23.12
Q 82.17 20.29 79.51 18.15
Q 78.91 17.68 78.38 18.04"
        />
        <path
          stroke="#703311"
          vector-effect="non-scaling-stroke"
          d="
M 78.03 17.62
Q 78.21 17.24 77.96 17.05
Q 75.11 14.81 71.62 14.95
Q 71.50 14.95 71.47 15.07
Q 71.43 15.19 71.40 15.32"
        />
        <path
          stroke="#703311"
          vector-effect="non-scaling-stroke"
          d="
M 70.38 14.96
Q 68.99 14.37 67.98 14.47
Q 67.17 14.54 64.97 15.22
Q 63.37 15.72 62.16 16.49
Q 55.81 20.52 53.35 27.57"
        />
        <path
          stroke="#9f9984"
          vector-effect="non-scaling-stroke"
          d="
M 53.99 28.80
Q 53.72 27.90 53.35 27.57"
        />
        <path
          stroke="#9f9984"
          vector-effect="non-scaling-stroke"
          d="
M 103.30 36.92
L 103.88 37.28"
        />
        <path
          stroke="#9f9984"
          vector-effect="non-scaling-stroke"
          d="
M 31.51 65.41
Q 31.15 64.96 31.23 64.52"
        />
        <path
          stroke="#703311"
          vector-effect="non-scaling-stroke"
          d="
M 7.97 74.77
Q 5.93 76.79 6.70 79.28
Q 7.86 82.99 11.43 85.79
Q 20.44 92.86 31.95 93.87"
        />
        <path
          stroke="#767a78"
          vector-effect="non-scaling-stroke"
          d="
M 31.95 93.87
Q 44.36 95.84 49.02 95.46
Q 52.00 95.21 54.94 94.92
Q 55.58 94.86 55.60 94.21
C 55.76 87.18 56.25 80.58 59.47 74.26
A 0.51 0.50 -79.5 0 0 58.97 73.53
C 51.42 74.24 44.09 72.90 36.78 70.50
C 35.00 69.92 33.05 69.95 31.22 69.99"
        />
        <path
          stroke="#703311"
          vector-effect="non-scaling-stroke"
          d="
M 31.22 69.99
L 30.95 69.87
Q 30.77 69.78 30.57 69.81
L 24.96 70.55"
        />
        <path
          stroke="#9f9984"
          vector-effect="non-scaling-stroke"
          d="
M 31.22 69.99
Q 30.12 70.64 30.87 70.93"
        />
        <path
          stroke="#9f9984"
          vector-effect="non-scaling-stroke"
          d="
M 31.95 93.87
Q 31.81 93.24 31.96 93.01"
        />
        <path
          stroke="#703311"
          vector-effect="non-scaling-stroke"
          d="
M 112.56 111.20
Q 115.73 113.16 119.06 112.55"
        />
        <path
          stroke="#767a78"
          vector-effect="non-scaling-stroke"
          d="
M 117.97 78.10
Q 106.86 76.29 94.99 76.50
Q 90.98 76.58 86.94 76.12
A 0.94 0.93 -87.3 0 0 85.91 77.06
Q 85.97 84.61 81.10 90.01
A 0.65 0.64 -50.3 0 0 81.18 90.95
Q 84.47 93.55 87.52 96.65
C 93.38 102.61 101.12 107.13 108.81 110.26
Q 109.21 110.43 109.65 110.41
Q 109.95 110.40 110.21 110.51"
        />
        <path
          stroke="#703311"
          vector-effect="non-scaling-stroke"
          d="
M 73.06 133.79
Q 74.78 136.96 77.48 138.29
C 82.58 140.81 88.98 140.12 92.90 135.58
Q 94.24 134.02 95.52 132.51
Q 97.75 129.88 97.96 125.45"
        />
        <path
          stroke="#767a78"
          vector-effect="non-scaling-stroke"
          d="
M 98.07 123.47
Q 98.19 123.39 98.36 123.37
Q 98.68 123.33 98.69 123.01
C 98.78 116.42 96.87 111.22 93.04 105.85
C 89.48 100.87 84.16 97.10 79.74 92.80
Q 79.14 92.22 78.47 92.71
C 74.39 95.72 69.00 96.98 63.92 97.65
Q 63.17 97.75 63.20 98.51
C 63.41 103.34 62.65 107.47 63.64 112.49
Q 65.32 120.98 69.15 128.39"
        />
        <path
          stroke="#703311"
          vector-effect="non-scaling-stroke"
          d="
M 29.09 120.15
Q 30.91 127.54 38.55 128.82
Q 38.75 128.86 38.91 128.80
Q 39.35 128.66 39.13 128.48"
        />
        <path
          stroke="#703311"
          vector-effect="non-scaling-stroke"
          d="
M 39.88 128.56
Q 42.16 129.43 44.88 128.63
Q 51.36 126.71 55.26 122.07"
        />
        <path
          stroke="#767a78"
          vector-effect="non-scaling-stroke"
          d="
M 55.26 122.07
Q 56.34 121.08 56.29 119.48
Q 55.98 109.07 55.78 98.50
A 0.56 0.56 0.0 0 0 55.26 97.95
Q 44.86 97.00 37.01 103.12"
        />
        <path
          stroke="#9f9984"
          vector-effect="non-scaling-stroke"
          d="
M 55.26 122.07
Q 54.83 122.24 54.71 121.83"
        />
      </g>
      <path
        fill="#99511d"
        d="
M 67.19 12.19
L 58.55 16.04
Q 58.50 16.07 58.46 16.05
L 58.22 15.94
Q 62.34 12.32 67.19 12.19
Z"
      />
      <path
        fill="#99511d"
        d="
M 70.69 12.02
Q 80.52 12.64 85.68 21.16
Q 83.24 18.87 81.30 16.68
Q 78.75 13.80 70.69 12.02
Z"
      />
      <path
        fill="#99511d"
        d="
M 70.38 14.96
Q 59.92 15.87 54.89 25.15
Q 53.83 27.11 53.99 28.80
Q 53.72 27.90 53.35 27.57
Q 55.81 20.52 62.16 16.49
Q 63.37 15.72 64.97 15.22
Q 67.17 14.54 67.98 14.47
Q 68.99 14.37 70.38 14.96
Z"
      />
      <path
        fill="#99511d"
        d="
M 78.03 17.62
L 71.40 15.32
Q 71.43 15.19 71.47 15.07
Q 71.50 14.95 71.62 14.95
Q 75.11 14.81 77.96 17.05
Q 78.21 17.24 78.03 17.62
Z"
      />
      <path
        fill="#99511d"
        d="
M 57.47 16.34
Q 57.75 16.79 57.52 17.02
Q 54.47 20.25 51.85 24.39
Q 53.55 19.48 57.47 16.34
Z"
      />
      <path
        fill="#99511d"
        d="
M 78.38 18.04
Q 78.91 17.68 79.51 18.15
Q 82.17 20.29 84.04 23.12
Q 84.14 23.27 84.06 23.43
Q 83.97 23.59 83.79 23.49
L 78.38 18.04
Z"
      />
      <path
        fill="#a5e0eb"
        d="
M 86.37 22.19
Q 88.64 26.78 90.18 27.54
Q 95.80 30.33 100.26 34.63
C 100.51 34.87 100.97 34.98 101.29 34.94
Q 101.60 34.85 101.52 35.39
C 96.35 37.33 93.57 40.18 89.92 43.65
Q 89.36 44.18 89.53 43.43
C 90.83 37.45 90.35 31.44 87.84 25.95
Q 87.00 24.12 86.37 22.19
Z"
      />
      <path
        fill="#a5e0eb"
        d="
M 84.05 24.55
Q 84.07 24.29 84.41 24.43
A 0.37 0.35 81.9 0 1 84.60 24.58
C 89.55 32.26 88.85 43.17 85.58 51.06
Q 82.92 57.50 80.24 64.16
A 1.21 1.20 21.0 0 0 80.94 65.73
L 81.32 65.87
Q 82.16 66.18 82.54 65.38
Q 84.81 60.62 86.34 56.41
C 89.31 48.23 94.99 40.05 103.30 36.92
L 103.88 37.28
Q 103.91 38.25 104.29 38.72
Q 110.19 45.99 113.59 54.66
C 114.63 57.32 115.37 60.93 116.56 64.19
Q 109.89 70.14 100.25 71.83
Q 93.27 73.06 86.19 73.27
Q 85.63 73.28 85.44 72.77
C 83.53 67.78 79.37 65.05 74.00 65.32
Q 66.95 65.69 61.60 71.64
A 0.86 0.85 28.5 0 1 60.74 71.89
Q 49.13 68.70 37.26 68.00
Q 35.57 67.90 31.51 65.41
Q 31.15 64.96 31.23 64.52
Q 31.65 64.44 31.74 64.02
Q 34.58 51.04 41.89 40.88
Q 42.03 40.67 42.10 40.05
Q 42.20 39.43 42.47 39.54
C 47.99 41.91 52.68 45.45 56.14 50.65
Q 60.19 56.74 68.14 62.48
Q 69.32 63.34 68.62 62.06
Q 64.45 54.42 57.96 48.34
Q 55.42 45.96 54.21 43.29
Q 50.92 36.02 53.35 27.57
Q 53.72 27.90 53.99 28.80
Q 61.22 24.57 69.20 23.16
Q 71.89 22.69 74.82 22.93
Q 78.40 23.21 80.43 23.84
Q 82.75 24.57 84.05 24.55
Z"
      />
      <path
        fill="#99511d"
        d="
M 50.82 26.78
Q 51.14 28.17 50.25 29.54
Q 50.24 29.14 49.96 29.00
Q 50.08 27.76 50.82 26.78
Z"
      />
      <path
        fill="#a5e0eb"
        d="
M 49.96 29.00
Q 50.24 29.14 50.25 29.54
Q 49.17 35.63 51.02 41.78
Q 51.16 42.27 50.72 42.01
L 44.17 38.16
Q 46.03 35.85 47.82 33.62
C 49.01 32.15 49.25 30.71 49.96 29.00
Z"
      />
      <path
        fill="#99511d"
        d="
M 113.17 33.89
Q 111.58 34.94 109.18 33.58
Q 111.09 32.96 113.17 33.89
Z"
      />
      <path
        fill="#99511d"
        d="
M 24.72 33.80
Q 23.38 35.11 21.66 35.45
Q 19.17 35.96 18.49 36.33
Q 15.88 37.75 14.41 39.51
Q 12.45 41.85 12.10 45.03
Q 11.79 47.91 12.95 50.91
Q 14.89 55.94 18.98 59.43
Q 21.44 61.52 23.65 64.01
Q 16.98 59.97 12.84 52.40
Q 8.94 45.28 13.72 39.20
Q 17.45 34.46 24.72 33.80
Z"
      />
      <path
        fill="#99511d"
        d="
M 104.32 34.21
Q 103.04 35.37 101.52 35.39
Q 101.60 34.85 101.29 34.94
Q 102.73 34.22 104.32 34.21
Z"
      />
      <path
        fill="#99511d"
        d="
M 116.77 35.21
Q 120.28 36.57 121.47 38.04
Q 131.38 50.23 120.03 64.65
Q 122.95 59.46 123.55 58.02
Q 125.79 52.61 125.12 47.16
Q 124.59 42.84 122.12 39.72
Q 121.15 38.50 119.52 37.41
Q 118.07 36.44 116.77 35.21
Z"
      />
      <path
        fill="#99511d"
        d="
M 25.86 36.50
Q 19.50 37.04 16.19 41.38
C 13.68 44.67 15.11 48.55 16.55 52.26
Q 14.51 50.57 14.19 48.02
Q 13.37 41.44 18.72 37.90
Q 22.18 35.61 25.86 36.50
Z"
      />
      <path
        fill="#99511d"
        d="
M 119.40 40.37
Q 116.01 37.25 112.02 36.93
Q 108.65 36.66 103.88 37.28
L 103.30 36.92
Q 108.70 35.38 114.17 36.67
C 116.06 37.12 117.60 38.60 118.99 39.38
Q 119.76 39.81 119.40 40.37
Z"
      />
      <path
        fill="#99511d"
        d="
M 119.66 40.37
Q 122.74 43.14 122.64 47.11
L 119.66 40.37
Z"
      />
      <path
        fill="#99511d"
        d="
M 122.91 49.76
Q 123.48 52.72 121.78 56.53
Q 120.10 60.28 118.28 61.82
Q 121.27 57.40 121.49 55.75
Q 121.88 52.71 122.91 49.76
Z"
      />
      <path
        fill="#99511d"
        d="
M 29.46 64.02
Q 30.48 63.92 31.23 64.52
Q 31.15 64.96 31.51 65.41
L 29.46 64.02
Z"
      />
      <path
        fill="#99511d"
        d="
M 26.78 66.02
Q 28.61 66.35 29.85 67.87
Q 30.22 68.33 29.64 68.46
Q 28.25 68.78 27.67 67.73
Q 27.71 66.88 26.78 66.02
Z"
      />
      <path
        fill="#a5e0eb"
        d="
M 116.93 67.66
L 118.68 75.68
L 100.74 74.70
A 0.26 0.26 0.0 0 1 100.70 74.18
C 105.22 73.32 109.88 71.86 113.75 69.49
Q 115.33 68.52 116.93 67.66
Z"
      />
      <path
        fill="#a5e0eb"
        d="
M 76.76 73.93
A 1.78 1.71 -29.1 0 1 75.89 73.70
Q 73.26 72.14 70.24 71.52
Q 69.71 71.41 69.25 71.70
C 64.29 74.79 60.86 81.88 67.03 86.00
A 1.77 1.76 8.8 0 1 67.72 86.94
L 68.69 90.15
A 0.82 0.81 63.1 0 0 69.96 90.57
Q 71.69 89.27 70.12 87.46
A 0.48 0.48 0.0 0 1 70.44 86.66
Q 76.17 86.23 76.70 81.01
A 1.75 1.74 1.3 0 0 74.86 79.09
Q 70.53 79.35 68.49 83.67
A 0.60 0.59 -66.4 0 1 67.73 83.97
Q 66.42 83.46 66.17 82.08
Q 65.29 77.07 69.42 73.67
A 1.06 1.05 32.1 0 1 70.35 73.46
Q 77.39 75.29 79.60 81.38
Q 80.70 84.40 79.39 87.04
C 76.68 92.51 69.62 93.82 63.60 94.28
Q 63.06 94.32 63.04 93.78
L 62.93 90.63
Q 62.91 90.02 62.32 89.86
C 61.41 89.61 60.47 90.11 60.40 91.11
Q 60.31 92.53 60.23 93.89
Q 60.20 94.40 59.69 94.50
L 58.29 94.78
Q 57.71 94.90 57.71 94.30
C 57.76 87.43 58.23 80.38 61.96 74.67
Q 62.27 74.19 62.82 74.04
Q 63.89 73.75 64.24 72.73
A 2.09 2.02 -11.8 0 1 64.87 71.80
C 70.41 67.07 78.76 65.90 82.71 73.19
Q 83.10 73.91 82.28 73.91
L 76.76 73.93
Z"
      />
      <path
        fill="#99511d"
        d="
M 31.22 69.99
Q 30.12 70.64 30.87 70.93
Q 27.56 71.27 24.96 70.55
L 30.57 69.81
Q 30.77 69.78 30.95 69.87
L 31.22 69.99
Z"
      />
      <path
        fill="#a5e0eb"
        d="
M 31.22 69.99
C 33.05 69.95 35.00 69.92 36.78 70.50
C 44.09 72.90 51.42 74.24 58.97 73.53
A 0.51 0.50 -79.5 0 1 59.47 74.26
C 56.25 80.58 55.76 87.18 55.60 94.21
Q 55.58 94.86 54.94 94.92
Q 52.00 95.21 49.02 95.46
Q 44.36 95.84 31.95 93.87
Q 31.81 93.24 31.96 93.01
Q 32.27 92.95 32.38 92.52
Q 32.45 92.25 32.37 91.98
Q 29.74 83.05 30.03 73.82
Q 30.05 73.05 30.40 72.35
Q 30.77 71.60 30.87 70.93
Q 30.12 70.64 31.22 69.99
Z"
      />
      <path
        fill="#a5e0eb"
        d="
M 80.71 77.76
Q 79.76 76.30 78.65 75.05
Q 78.02 74.34 78.95 74.58
L 83.28 75.69
Q 83.94 75.86 83.91 76.54
Q 83.78 79.78 83.15 82.83
Q 82.96 83.75 82.58 82.89
C 81.82 81.16 81.79 79.41 80.71 77.76
Z"
      />
      <path
        fill="#99511d"
        d="
M 7.97 74.77
C 6.93 78.82 7.74 81.68 11.05 84.44
Q 16.44 88.95 24.31 91.60
Q 29.00 93.18 31.96 93.01
Q 31.81 93.24 31.95 93.87
Q 20.44 92.86 11.43 85.79
Q 7.86 82.99 6.70 79.28
Q 5.93 76.79 7.97 74.77
Z"
      />
      <path
        fill="#99511d"
        d="
M 4.86 75.15
Q 5.39 75.81 5.05 77.11
C 4.17 80.49 7.18 84.81 9.65 86.84
Q 14.76 91.04 18.73 92.53
Q 22.22 93.83 25.91 95.11
C 28.25 95.93 30.96 96.14 33.48 96.91
Q 32.63 97.09 33.00 97.39
Q 29.32 96.45 25.54 95.55
Q 17.20 93.55 10.34 88.40
Q 7.71 86.42 5.28 82.48
Q 3.04 78.84 4.86 75.15
Z"
      />
      <path
        fill="#a5e0eb"
        d="
M 117.97 78.10
Q 118.40 95.23 110.10 109.86
Q 109.94 110.14 110.21 110.51
Q 109.95 110.40 109.65 110.41
Q 109.21 110.43 108.81 110.26
C 101.12 107.13 93.38 102.61 87.52 96.65
Q 84.47 93.55 81.18 90.95
A 0.65 0.64 -50.3 0 1 81.10 90.01
Q 85.97 84.61 85.91 77.06
A 0.94 0.93 -87.3 0 1 86.94 76.12
Q 90.98 76.58 94.99 76.50
Q 106.86 76.29 117.97 78.10
Z"
      />
      <path
        fill="#a5e0eb"
        d="
M 74.3387 81.2428
A 2.32 0.84 -35.5 0 1 72.9378 83.2739
A 2.32 0.84 -35.5 0 1 70.5613 83.9372
A 2.32 0.84 -35.5 0 1 71.9622 81.9061
A 2.32 0.84 -35.5 0 1 74.3387 81.2428
Z"
      />
      <path
        fill="#a5e0eb"
        d="
M 98.07 123.47
Q 98.11 122.72 97.89 122.44
Q 97.69 122.17 97.13 122.49
Q 87.09 128.15 75.51 127.93
Q 73.32 127.88 71.26 127.23
Q 70.55 127.01 69.15 128.39
Q 65.32 120.98 63.64 112.49
C 62.65 107.47 63.41 103.34 63.20 98.51
Q 63.17 97.75 63.92 97.65
C 69.00 96.98 74.39 95.72 78.47 92.71
Q 79.14 92.22 79.74 92.80
C 84.16 97.10 89.48 100.87 93.04 105.85
C 96.87 111.22 98.78 116.42 98.69 123.01
Q 98.68 123.33 98.36 123.37
Q 98.19 123.39 98.07 123.47
Z"
      />
      <path
        fill="#a5e0eb"
        d="
M 33.48 96.91
L 41.65 97.83
Q 42.18 97.89 41.70 98.13
L 35.53 101.18
Q 35.59 98.38 33.00 97.39
Q 32.63 97.09 33.48 96.91
Z"
      />
      <path
        fill="#a5e0eb"
        d="
M 55.26 122.07
Q 54.83 122.24 54.71 121.83
Q 55.05 121.24 54.13 120.61
C 49.29 117.29 45.00 113.69 41.35 108.87
Q 39.25 106.09 37.01 103.12
Q 44.86 97.00 55.26 97.95
A 0.56 0.56 0.0 0 1 55.78 98.50
Q 55.98 109.07 56.29 119.48
Q 56.34 121.08 55.26 122.07
Z"
      />
      <path
        fill="#a5e0eb"
        d="
M 58.10 97.61
A 0.12 0.12 0.0 0 1 58.22 97.49
L 58.28 97.49
A 8.80 2.12 89.4 0 1 60.49 106.27
L 60.49 106.69
A 8.80 2.12 89.4 0 1 58.46 115.51
L 58.40 115.51
A 0.12 0.12 0.0 0 1 58.28 115.39
L 58.10 97.61
Z"
      />
      <path
        fill="#a5e0eb"
        d="
M 108.08 112.77
Q 107.94 112.89 107.81 112.97
Q 107.57 113.13 107.43 113.37
Q 105.72 116.14 103.03 118.07
A 2.49 2.48 -22.1 0 0 102.01 120.47
Q 102.24 121.94 101.23 123.35
Q 101.24 117.50 99.94 113.77
Q 98.82 110.57 96.75 107.08
Q 96.20 106.17 97.10 106.73
Q 102.76 110.28 108.07 112.36
Q 108.20 112.41 108.20 112.56
Q 108.21 112.79 108.08 112.77
Z"
      />
      <path
        fill="#99511d"
        d="
M 112.56 111.20
L 119.06 112.55
Q 115.73 113.16 112.56 111.20
Z"
      />
      <path
        fill="#99511d"
        d="
M 27.05 112.96
Q 26.84 117.30 27.31 121.26
Q 27.46 122.53 28.17 124.12
Q 28.77 125.45 29.25 126.93
Q 23.88 120.94 27.05 112.96
Z"
      />
      <path
        fill="#a5e0eb"
        d="
M 65.57 126.86
Q 62.26 123.83 59.00 123.61
Q 58.72 124.29 58.59 122.45
L 61.93 114.78
Q 62.14 114.29 62.28 114.81
L 65.57 126.86
Z"
      />
      <path
        fill="#99511d"
        d="
M 119.90 115.91
Q 116.20 116.02 112.40 114.32
Q 116.28 114.37 119.90 115.91
Z"
      />
      <path
        fill="#99511d"
        d="
M 29.09 120.15
Q 32.73 127.42 39.13 128.48
Q 39.35 128.66 38.91 128.80
Q 38.75 128.86 38.55 128.82
Q 30.91 127.54 29.09 120.15
Z"
      />
      <path
        fill="#99511d"
        d="
M 54.71 121.83
Q 54.83 122.24 55.26 122.07
Q 51.36 126.71 44.88 128.63
Q 42.16 129.43 39.88 128.56
C 42.64 128.14 45.51 128.10 47.91 127.00
Q 51.73 125.25 54.71 121.83
Z"
      />
      <path
        fill="#99511d"
        d="
M 58.59 122.45
Q 58.72 124.29 59.00 123.61
C 57.38 126.60 56.20 126.74 54.01 128.34
Q 52.58 129.38 51.27 129.78
C 43.62 132.10 37.59 134.13 31.24 128.73
Q 31.29 128.61 31.34 128.48
A 0.06 0.06 0.0 0 1 31.43 128.45
Q 35.96 131.61 39.64 131.45
Q 46.58 131.15 51.49 129.13
Q 55.95 127.29 58.55 123.19
Q 58.68 122.97 58.59 122.45
Z"
      />
      <path
        fill="#99511d"
        d="
M 97.96 125.45
Q 97.75 129.88 95.52 132.51
Q 94.24 134.02 92.90 135.58
C 88.98 140.12 82.58 140.81 77.48 138.29
Q 74.78 136.96 73.06 133.79
C 77.36 138.16 83.27 140.84 88.97 137.65
C 93.22 135.26 95.33 132.31 96.78 128.01
Q 97.24 126.66 97.96 125.45
Z"
      />
      <path
        fill="#99511d"
        d="
M 100.82 125.10
Q 99.59 136.73 89.69 141.20
Q 86.03 142.85 81.71 142.14
C 76.18 141.22 71.62 137.14 68.57 132.51
Q 68.91 131.90 69.50 132.24
A 0.60 0.54 88.4 0 1 69.72 132.47
Q 72.20 137.43 78.29 140.17
C 82.03 141.84 85.83 142.03 89.60 140.31
Q 98.16 136.44 100.82 125.10
Z"
      />
    </svg>
  )
}

export default Logo
