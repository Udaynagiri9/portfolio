$infoPath = "c:\Users\Uday\Desktop\UDAY 9\INFO"
$destPath = "c:\Users\Uday\Desktop\UDAY 9\public\certificates"

New-Item -ItemType Directory -Path $destPath -Force | Out-Null

$srcFolder = Get-ChildItem -Path $infoPath -Directory | Where-Object { $_.Name -like "*cert*" } | Select-Object -First 1

if ($srcFolder) {
    Write-Host "Found folder: $($srcFolder.FullName)"
    Get-ChildItem -Path $srcFolder.FullName -File | ForEach-Object {
        Copy-Item -Path $_.FullName -Destination $destPath -Force
        Write-Host "Copied: $($_.Name)"
    }
    Write-Host "All done."
} else {
    Write-Host "Folder not found!"
}
