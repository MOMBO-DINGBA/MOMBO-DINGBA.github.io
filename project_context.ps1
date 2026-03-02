param (
    [string]$ProjectPath = "."
)

$ProjectPath = (Resolve-Path $ProjectPath).Path
$OutputFile = Join-Path $ProjectPath "project_context.txt"

Write-Host "Project Path: $ProjectPath"
Write-Host "Output File: $OutputFile"

$ExcludeDirs = @(
    "node_modules", "vendor", "build", "dist", "target",
    "__pycache__", ".next", "cache", "venv", "storage"
)

$ExcludeFiles = @(
    "*.log", "*.jar", "*.pdf", "*.png", "*.jpg",
    "*.class", "*.sqlite", "*.csv",
    "project_context.txt",
    "package-lock.json", "yarn.lock",
    "composer.lock", "pnpm-lock.yaml", "*.ico"
)

if (Test-Path $OutputFile) {
    Remove-Item $OutputFile -Force
}

@"
Project Context From: $ProjectPath
Generated On: $(Get-Date)
===============================================
"@ | Out-File $OutputFile -Encoding utf8

Get-ChildItem -Path $ProjectPath -Recurse -File -ErrorAction SilentlyContinue |
Where-Object {
    $dirOk = $true
    foreach ($dir in $ExcludeDirs) {
        if ($_.FullName -match "\\$dir\\") { $dirOk = $false }
    }

    $fileOk = $true
    foreach ($pattern in $ExcludeFiles) {
        if ($_.Name -like $pattern) { $fileOk = $false }
    }

    $dirOk -and $fileOk
} |
Sort-Object FullName |
ForEach-Object {

    Add-Content $OutputFile "//---> PATH: $($_.FullName)`n"

    try {
        $content = Get-Content $_.FullName -Raw -ErrorAction Stop
        Add-Content $OutputFile $content
    }
    catch {
        Add-Content $OutputFile "[Binary or unreadable file]"
    }

    Add-Content $OutputFile "`n// END OF FILE`n"
}

Write-Host "Done."

