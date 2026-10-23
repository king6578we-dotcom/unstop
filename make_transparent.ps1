Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Bitmap]::FromFile('c:\Users\kanki\Desktop\untop\public\images\unstop-pro-banner-clean.png')

# Create a 32-bit ARGB copy so transparency is supported
$bmp = New-Object System.Drawing.Bitmap($img.Width, $img.Height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.DrawImage($img, 0, 0, $img.Width, $img.Height)
$g.Dispose()
$img.Dispose()

# Queue-based flood fill to make the outer white background completely transparent
$w = $bmp.Width
$h = $bmp.Height
$visited = New-Object 'bool[,]' $w, $h
$queue = New-Object System.Collections.Generic.Queue[System.Drawing.Point]

# Seed with 4 corners
$seeds = @(
    (New-Object System.Drawing.Point(0, 0)),
    (New-Object System.Drawing.Point($w - 1, 0)),
    (New-Object System.Drawing.Point(0, $h - 1)),
    (New-Object System.Drawing.Point($w - 1, $h - 1))
)

foreach ($s in $seeds) {
    $queue.Enqueue($s)
    $visited[$s.X, $s.Y] = $true
}

$transparent = [System.Drawing.Color]::FromArgb(0, 0, 0, 0)

while ($queue.Count -gt 0) {
    $pt = $queue.Dequeue()
    $x = $pt.X
    $y = $pt.Y
    $c = $bmp.GetPixel($x, $y)

    # Check if pixel is part of outer background (light/white, R>220 and G>220)
    if ($c.R -gt 210 -and $c.G -gt 210 -and $c.B -gt 210) {
        $bmp.SetPixel($x, $y, $transparent)

        # Check 4 neighbors
        $neighbors = @(
            (New-Object System.Drawing.Point($x + 1, $y)),
            (New-Object System.Drawing.Point($x - 1, $y)),
            (New-Object System.Drawing.Point($x, $y + 1)),
            (New-Object System.Drawing.Point($x, $y - 1))
        )

        foreach ($n in $neighbors) {
            if ($n.X -ge 0 -and $n.X -lt $w -and $n.Y -ge 0 -and $n.Y -lt $h) {
                if (-not $visited[$n.X, $n.Y]) {
                    $visited[$n.X, $n.Y] = $true
                    $queue.Enqueue($n)
                }
            }
        }
    }
}

$bmp.Save('c:\Users\kanki\Desktop\untop\public\images\unstop-pro-banner-transparent.png', [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
Write-Output "Transparent banner created successfully!"
