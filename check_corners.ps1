Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Bitmap]::FromFile('c:\Users\kanki\Desktop\untop\public\images\unstop-pro-banner-rounded.png')
$corners = @(
    @{ Name='TopLeft(0,0)'; X=0; Y=0 },
    @{ Name='TopRight'; X=($img.Width - 1); Y=0 },
    @{ Name='BottomLeft'; X=0; Y=($img.Height - 1) },
    @{ Name='BottomRight'; X=($img.Width - 1); Y=($img.Height - 1) },
    @{ Name='Inside(20,20)'; X=20; Y=20 }
)

foreach ($c in $corners) {
    $p = $img.GetPixel($c.X, $c.Y)
    Write-Output "$($c.Name): A=$($p.A) R=$($p.R) G=$($p.G) B=$($p.B)"
}
$img.Dispose()
