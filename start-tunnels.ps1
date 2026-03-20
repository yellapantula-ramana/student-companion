# Start frontend tunnel
$frontendJob = Start-Job -ScriptBlock {
    cloudflared.exe tunnel --url http://localhost:3000 2>&1
}

# Start backend tunnel
$backendJob = Start-Job -ScriptBlock {
    cloudflared.exe tunnel --url http://localhost:3002 2>&1
}

# Wait for tunnels to initialize
Start-Sleep -Seconds 10

# Get output from jobs
$frontendOutput = Receive-Job -Job $frontendJob
$backendOutput = Receive-Job -Job $backendJob

# Extract URLs
$frontendUrl = $frontendOutput | Select-String -Pattern "https://[^\s]+\.trycloudflare\.com" | Select-Object -First 1 | ForEach-Object { $_.Matches.Value }
$backendUrl = $backendOutput | Select-String -Pattern "https://[^\s]+\.trycloudflare\.com" | Select-Object -First 1 | ForEach-Object { $_.Matches.Value }

Write-Host "============================================"
Write-Host "Cloudflare Tunnels Started!"
Write-Host "============================================"
Write-Host "Frontend URL: $frontendUrl"
Write-Host "Backend URL: $backendUrl"
Write-Host "============================================"

# Keep jobs running
while ($true) {
    Start-Sleep -Seconds 5
    $frontendOutput = Receive-Job -Job $frontendJob
    $backendOutput = Receive-Job -Job $backendJob
    
    $newFrontendUrl = $frontendOutput | Select-String -Pattern "https://[^\s]+\.trycloudflare\.com" | Select-Object -First 1 | ForEach-Object { $_.Matches.Value }
    $newBackendUrl = $backendOutput | Select-String -Pattern "https://[^\s]+\.trycloudflare\.com" | Select-Object -First 1 | ForEach-Object { $_.Matches.Value }
    
    if ($newFrontendUrl -and -not $frontendUrl) {
        $frontendUrl = $newFrontendUrl
        Write-Host "Frontend URL: $frontendUrl"
    }
    if ($newBackendUrl -and -not $backendUrl) {
        $backendUrl = $newBackendUrl
        Write-Host "Backend URL: $backendUrl"
    }
}
