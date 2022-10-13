import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { AiTwotoneSetting, AiOutlineSetting } from 'react-icons/ai'
import { RiExchangeLine, RiExchangeFill } from 'react-icons/ri'
import { IoWalletOutline, IoWallet, IoBarChart, IoBarChartOutline } from "react-icons/io5";


const BottomNavBar = props => {
    const history = useHistory()
    const [activeTabs, setActiveTabs] = useState(props.name)
    useEffect(() => {
        switch (activeTabs) {
            case 'wallet':
                history.push('/')
                break;
            case 'market':
                history.push('/market')
                break;
            case 'swap':
                history.push('/swap')
                break;
            case 'setting':
                history.push('/setting')
                break;
            default:
                history.push('/')
                break;
        }
    }, [activeTabs, history])

    return (
        <div className='bottom-nav'>
            <div className='bn-tab'>
                {activeTabs === 'wallet' ?
                    <IoWallet
                        size='35'
                        color='#3330E4'
                        onClick={() => setActiveTabs('wallet')}
                    /> :
                    <IoWalletOutline
                        size='35'
                        color='#525252'
                        onClick={() => setActiveTabs('wallet')}
                    />}
            </div>
            <div className='bn-tab'>
                {activeTabs === 'market' ?
                    <IoBarChart
                        size='28'
                        color='#3330E4'
                        onClick={() => setActiveTabs('market')}
                    /> :
                    <IoBarChartOutline
                        size='28'
                        color='#525252'
                        onClick={() => setActiveTabs('market')}
                    />}
            </div>
            <div className='bn-tab'>
                {activeTabs === 'swap' ?
                    <RiExchangeFill
                        size='33'
                        color='#3330E4'
                        onClick={() => setActiveTabs('swap')}
                    /> :
                    <RiExchangeLine
                        size='33'
                        color='#525252'
                        onClick={() => setActiveTabs('swap')}
                    />}
            </div>
            <div className='bn-tab'>
                {activeTabs === 'setting' ?
                    <AiTwotoneSetting
                        size='33'
                        color='#3330E4'
                        onClick={() => setActiveTabs('setting')}
                    /> :
                    <AiOutlineSetting
                        size='33'
                        color='#525252'
                        onClick={() => setActiveTabs('setting')}
                    />}
            </div>
        </div>
    )
}

export default BottomNavBar