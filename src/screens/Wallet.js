import React from 'react'
import BottomNavBar from '../components/BottomNavBar'
import HeaderNavbar from '../components/HeaderNavbar'

const Wallet = () => {
    return (
        <div>
            <HeaderNavbar />
            <div className='container'>
                <p>Balance</p>
                <h1>Rp 27,230,069</h1>
                <h3>AriSmrd Wallet</h3>
                <div className='content'>
                    <h4 className='content-title'>Your assets</h4>
                    <div class="card-layout">
                        <div class="card-layout__item">
                            Bitcoin
                            <div class="card-balance__item">
                                0.0723 BTC
                            </div>
                        </div>
                    </div>
                    <div class="card-layout">
                        <div class="card-layout__item">
                            Ethereum
                            <div class="card-balance__item">
                                0.68 ETH
                            </div>
                        </div>
                    </div>
                    <div class="card-layout">
                        <div class="card-layout__item">
                            Binance Smart Chain
                            <div class="card-balance__item">
                                1.956 BNB
                            </div>
                        </div>
                    </div>
                    <div class="card-layout">
                        <div class="card-layout__item">
                            Utopium
                            <div class="card-balance__item">
                                1,791,000 UTP
                            </div>
                        </div>
                    </div>
                    <div class="card-layout">
                        <div class="card-layout__item">
                            Dexrium
                            <div class="card-balance__item">
                                181,000 DXR
                            </div>
                        </div>
                    </div>
                    <div class="card-layout">
                        <div class="card-layout__item">
                            Hecodex
                            <div class="card-balance__item">
                                1,302,000 HECO
                            </div>
                        </div>
                    </div>
                    <div class="card-layout">
                        <div class="card-layout__item">
                            Paracetamol Inu
                            <div class="card-balance__item">
                                2,114,000 PCI
                            </div>
                        </div>
                    </div>
                    <div class="card-layout">
                        <div class="card-layout__item">
                            Hystrix Network
                            <div class="card-balance__item">
                                1,529,900 HRX
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BottomNavBar name='wallet' />
        </div>
    )
}

export default Wallet
