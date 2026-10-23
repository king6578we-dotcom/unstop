
Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Bitmap]::FromFile('public/images/coding-and-stats.png')
Write-Output "Image size: $($img.Width)x$($img.Height)"

# Find boundary between top cards and bottom stats
# Let's inspect horizontal lines around y = 300 to 450
for ($y = 280; $y -lt 450; $y += 5) {
    $whiteCount = 0
    for ($x = 0; $x -lt $img.Width; $x += 10) {
        $c = $img.GetPixel($x, $y)
        if ($c.R -gt 245 -and $c.G -gt 245 -and $c.B -gt 245) {
            $whiteCount++
        }
    }
    Write-Output "y=$y: whitePercent=$([math]::Round($whiteCount / ($img.Width / 10) * 100))%"
}
$img.Dispose()
