const { execSync } = require('child_process');
const fs = require('fs');

const ps = `
Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Bitmap]::FromFile('public/images/access-profiles-badge.png')
Write-Output "Size: $($img.Width)x$($img.Height)"

# Sample points inside the badge
$pts = @(
    @{ Name='Left bg'; X=30; Y=24 },
    @{ Name='Center bg'; X=130; Y=24 },
    @{ Name='Right bg'; X=230; Y=24 },
    @{ Name='Text Access'; X=70; Y=24 },
    @{ Name='Text 32M+'; X=150; Y=24 },
    @{ Name='Icon Zap'; X=45; Y=24 }
)

foreach ($p in $pts) {
    $c = $img.GetPixel($p.X, $p.Y)
    Write-Output "$($p.Name) ($($p.X), $($p.Y)): R=$($c.R), G=$($c.G), B=$($c.B)"
}
$img.Dispose()
`;

fs.writeFileSync('temp-badge.ps1', ps);
try {
    const out = execSync('powershell -ExecutionPolicy Bypass -File temp-badge.ps1', { encoding: 'utf-8' });
    console.log(out);
} catch (e) {
    console.log('Error:', e.message);
}
if (fs.existsSync('temp-badge.ps1')) fs.unlinkSync('temp-badge.ps1');
