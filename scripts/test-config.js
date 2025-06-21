#!/usr/bin/env node

/**
 * Test script to verify DecapCMS configuration
 * Run with: node scripts/test-config.js
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 DecapCMS Configuration Test\n');

// Check environment variables
console.log('1. Checking environment variables...');
const requiredEnvVars = ['GITHUB_CLIENT_ID', 'GITHUB_CLIENT_SECRET'];
const missingEnvVars = [];

requiredEnvVars.forEach(varName => {
  if (!process.env[varName]) {
    missingEnvVars.push(varName);
  } else {
    console.log(`   ✅ ${varName}: Set (${process.env[varName].substring(0, 8)}...)`);
  }
});

if (missingEnvVars.length > 0) {
  console.log(`   ❌ Missing environment variables: ${missingEnvVars.join(', ')}`);
  console.log('   💡 Make sure to create .env.local with your GitHub OAuth credentials');
} else {
  console.log('   ✅ All required environment variables are set');
}

// Check config.yml
console.log('\n2. Checking config.yml...');
const configPath = path.join(process.cwd(), 'public/admin/config.yml');

if (!fs.existsSync(configPath)) {
  console.log('   ❌ config.yml not found at public/admin/config.yml');
} else {
  const configContent = fs.readFileSync(configPath, 'utf8');
  
  // Check for placeholder values
  if (configContent.includes('your-username/your-blog-repo')) {
    console.log('   ⚠️  Repository still has placeholder value');
    console.log('   💡 Update the repo field in config.yml with your actual repository');
  } else {
    console.log('   ✅ Repository configuration appears to be updated');
  }
  
  // Check backend configuration
  if (configContent.includes('name: github')) {
    console.log('   ✅ GitHub backend configured');
  } else {
    console.log('   ❌ GitHub backend not found in config');
  }
  
  if (configContent.includes('auth_endpoint: /api/auth')) {
    console.log('   ✅ Auth endpoint configured');
  } else {
    console.log('   ❌ Auth endpoint not configured');
  }
}

// Check admin files
console.log('\n3. Checking admin files...');
const adminIndexPath = path.join(process.cwd(), 'public/admin/index.html');

if (!fs.existsSync(adminIndexPath)) {
  console.log('   ❌ admin/index.html not found');
} else {
  const indexContent = fs.readFileSync(adminIndexPath, 'utf8');
  
  if (indexContent.includes('decap-cms@3.6.4')) {
    console.log('   ✅ Latest DecapCMS version (3.6.4) configured');
  } else if (indexContent.includes('decap-cms')) {
    console.log('   ⚠️  DecapCMS script found but version might be outdated');
  } else {
    console.log('   ❌ DecapCMS script not found');
  }
}

// Check auth route
console.log('\n4. Checking auth route...');
const authRoutePath = path.join(process.cwd(), 'src/app/api/auth/route.ts');

if (!fs.existsSync(authRoutePath)) {
  console.log('   ❌ Auth route not found at src/app/api/auth/route.ts');
} else {
  console.log('   ✅ Auth route file exists');
}

console.log('\n📋 Summary:');
console.log('   - Follow DECAPCMS_SETUP.md for complete setup instructions');
console.log('   - Make sure to set up your GitHub OAuth app');
console.log('   - Update config.yml with your actual repository');
console.log('   - Deploy and test at /admin endpoint');

if (missingEnvVars.length === 0) {
  console.log('\n🎉 Configuration looks good! Deploy and test your setup.');
} else {
  console.log('\n⚠️  Please fix the issues above before deploying.');
}
