import { createContext, useEffect, useReducer } from "react";
import { AppReducer } from './AppReducer'
import { useContractReads } from "wagmi";
import { CONFIG } from '../configs/config'
import tokenAbi from './../configs/token.json'
import stakingAbi from './../configs/staking.json'
import { ethers } from "../../node_modules/ethers/lib/index";

const orbnContract = {
    address: CONFIG.ORBN_ADDRESS,
    abi: tokenAbi,
}
const usdtContract = {
    address: CONFIG.USDT_ADDRESS,
    abi: tokenAbi,
}
const stakingContract = {
    address: CONFIG.STAKING_CONTRACT,
    abi: stakingAbi,
}


const initialState = {
    loading: false,
    stakers: 0,
    lockedTokens: {
        orbn: 0.00,
        usdt: 0.00
    },
    apy: {
        0: "100",
        1: "400",
        2: "800",
        3: "1200",
        4: "1800",
        5: "100",
        6: "400",
        7: "800",
        8: "1200",
        9: "1800",
    },
    userStakes: [],
    pools: [], 
    rewards: []
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
    const { data, isError, isLoading } = useContractReads({
        contracts: [
            {
                ...orbnContract, 
                functionName: 'balanceOf',
                args: [CONFIG.STAKING_CONTRACT]
            },
            {
                ...usdtContract, 
                functionName: 'balanceOf',
                args: [CONFIG.STAKING_CONTRACT]
            },
            {
                ...stakingContract, 
                functionName: 'stakeHoldersLength'
            },
        ], 
        onSuccess(data) {
            updateLockedTokens({
                orbn: ethers.utils.formatUnits(data[0].toString(), CONFIG.ORBN_DECIMALS),
                usdt: ethers.utils.formatUnits(data[1].toString(), CONFIG.ORBN_DECIMALS)
            })
            updateStakers(data[2].toString())
        },      
    })
    const {data:apy, isError:apy_err, isLoading:apy_loading} = useContractReads({
        contracts: [
            {
                ...stakingContract,
                functionName: 'poolInfo',
                args: [0]
            },
            {
                ...stakingContract,
                functionName: 'poolInfo',
                args: [1]
            },
            {
                ...stakingContract,
                functionName: 'poolInfo',
                args: [2]
            },
            {
                ...stakingContract,
                functionName: 'poolInfo',
                args: [3]
            },
            {
                ...stakingContract,
                functionName: 'poolInfo',
                args: [4]
            },
            {
                ...stakingContract,
                functionName: 'poolInfo',
                args: [5]
            },
            {
                ...stakingContract,
                functionName: 'poolInfo',
                args: [6]
            },
            {
                ...stakingContract,
                functionName: 'poolInfo',
                args: [7]
            },
            {
                ...stakingContract,
                functionName: 'poolInfo',
                args: [8]
            },
            {
                ...stakingContract,
                functionName: 'poolInfo',
                args: [9]
            },
        ],
        onSuccess(data) {
            console.log('Success', data)
            const apyObj = {}
            data.map((item, i) => {
                apyObj[i] = item.apy.toString()
            })
            UpdateApy(apyObj)
            updatePools(data)
        },
      
    })

    const updateLockedTokens = (lockedTokens) => {
        dispatch({
            type: 'UPDATE_LOCKED_TOKENS',
            payload: lockedTokens
        })
    }

    const UpdateApy = (apy) => {
        dispatch({
            type: 'UPDATE_APY',
            payload: apy
        })
    }

    const updateUserStakes = (stakes) => {
        dispatch({
            type: 'UPDATE_STAKES',
            payload: stakes
        })
    }

    const updateStakers = (stakers) => {
        dispatch({
            type: 'UPDATE_STAKERS',
            payload: stakers
        })
    }

    const updateLoading = (loading) => {
        dispatch({
            type: 'UPDATE_LOADING',
            payload: loading
        })
    }

    const updatePools = (pools) => {
        dispatch({
            type: 'UPDATE_POOLS',
            payload: pools
        })
    }

    const updateRewards = (rewards) => {
        dispatch({
            type: 'UPDATE_REWARDS',
            payload: rewards
        })
    }

    const fetchData = async () => {

    }

    useEffect(() => {
        if(isLoading || apy_loading) {
            updateLoading(true)
        } else {
            updateLoading(false)
        }
    }, [isLoading, apy_loading])

    return (
        <GlobalContext.Provider value={
            {
                blockchainData: state,
                updateLockedTokens,
                UpdateApy,
                updateUserStakes,
                updateStakers,
                updateLoading,
                updatePools,
                updateRewards
            }
        }
        >
            {children}
        </GlobalContext.Provider>
    )
}