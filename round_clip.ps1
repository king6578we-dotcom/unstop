Add-Type -AssemblyName System.Drawing

$srcPath = 'c:\Users\kanki\Desktop\untop\public\images\unstop-pro-banner-clean.png'
$destPath = 'c:\Users\kanki\Desktop\untop\public\images\unstop-pro-banner-rounded.png'

$src = [System.Drawing.Bitmap]::FromFile($srcPath)
$w = $src.Width
$h = $src.Height

$dest = New-Object System.Drawing.Bitmap($w, $h, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($dest)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.Clear([System.Drawing.Color]::Transparent)

# Rounded rectangle radius ~ 14px
$r = 14
$path = New-Object System.Drawing.Drawing2D.GraphicsPath
$path.AddArc(0, 0, $r * 2, $r * 2, 180, 90)
$path.AddArc($w - $r * 2, 0, $r * 2, $r * 2, 270, 90)
$path.AddArc($w - $r * 2, $h - $r * 2, $r * 2, $r * 2, 0, 90)
$path.AddArc(0, $h - $r * 2, $r * 2, $r * 2, 90, 90)
$path.CloseFigure()

$g.SetClip($path)
$g.DrawImage($src, 0, 0, $w, $h)

$path.Dispose()
$g.Dispose()
$src.Dispose()

$dest.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)
$dest.Dispose()

Write-Output "Created smooth antialiased transparent rounded banner!"
