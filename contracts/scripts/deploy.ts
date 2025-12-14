// scripts/deploy.ts
import { deploy } from '@midnight/sdk'

async function main() {
    // Deploy test tokens
    const tokenA = await deploy('TestToken', ['Token A', 'TKA'])
    const tokenB = await deploy('TestToken', ['Token B', 'TKB'])
    
    // Deploy LP token
    const lpToken = await deploy('LPToken')
    
    // Deploy AMM
    const amm = await deploy('AMM', [tokenA.address, tokenB.address, lpToken.address])
    
    console.log('AMM deployed:', amm.address)
}