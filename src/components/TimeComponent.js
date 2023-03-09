import React, { useContext } from 'react'
import MainCard from './MainCard'
import { Box, Stack, Typography, Divider, Paper } from "@mui/material"
import { styled } from '@mui/material/styles';
import useAccountData from 'hooks/useAccountData';
import { GlobalContext } from 'context/GlobalContext';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#e5e5e5',
    borderRadius: 0,
    paddingTop: '1.25rem',
    paddingBottom: '1.25rem',
    textAlign: 'center',
    boxShadow: 'none',
    width: '68px'
}));

const TimeComponent = () => {
    const daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const { blockchainData } = useContext(GlobalContext)
    const userData = useAccountData()
    console.log(blockchainData)

    
    const styles = {
        lockPeriod: {
            textAlign: 'center',
            fontFamily: 'Space Grotesk',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '20px'
        },
        timer: {
            color: '#F5331E',
            fontFamily: 'Space Grotesk',
            fontWeight: 600,
            fontSize: '32px',
            lineHeight: '23px'
    
        },
        timeCat: {
            color: '#000515',
            lineHeight: '10px',
            fontSize: '12px',
            mt: 2
        },
        lockAmount: {
            textAlign: 'center',
            fontFamily: 'Space Grotesk',
            fontWeight: 500,
            fontSize: '18px',
            lineHeight: '16px',
            color: '#000515',
            opacity: 0.7,
            mt: 3
        },
        selectBox: {
            width: '120px',
            padding: '6px 10px',
            fontFamily: 'Space Grotesk',
            fontSize: '16px',
            background: '#e6e6e6',
            border: '1px solid #ccc'
        },
        stakeChartvalue: {
            fontFamily: 'Space Grotesk',
            fontSize: '24px',
            fontWeight: 700,
            lineHeight: '30px'
        },
        txtInput: {
            border: '1px solid #C7C4C3',
            width: '100%',
            fontSize: '16px',
            fontFamily: 'Space Grotesk',
            padding: '18px 16px',
            background: '#e5e5e5',
            color: '#000515',
            borderRadius: 0
        },
        btn: {
            width: '100%',
            bgcolor: '#F5331E',
            fontFamily: 'Space Grotesk',
            fontSize: '16px',
            borderRadius: 0,
            color: "#fff",
            py: 2,
            px: 2,
            '&:hover': {
                bgcolor: "#ff7262"
            }
        }
    }
    return (
        <MainCard >
            <Box>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Typography variant="h4" >Lock Period</Typography>
                    <select style={styles.selectBox}>
                        <optgroup label="ORBN">
                            <option value="0">1 Month</option>
                            <option value="1">3 Month</option>
                            <option value="2">6 Month</option>
                            <option value="3">9 Month</option>
                            <option value="4">12 Month</option>
                        </optgroup>

                        <optgroup label="USDT">
                            <option value="5">1 Month</option>
                            <option value="6">3 Month</option>
                            <option value="7">6 Month</option>
                            <option value="8">9 Month</option>
                            <option value="9">12 Month</option>
                        </optgroup>

                    </select>
                </Stack>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pt: 4.5, pb: 7, pl: 1, pr: 1, flexDirection: 'column' }}>
                    <Stack spacing={1}>
                        <Typography variant="p" sx={styles.lockPeriod}>{daysInWeek[new Date().getDay()]}</Typography>
                        <Typography variant="p" sx={styles.lockPeriod}>{new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(new Date())}</Typography>
                    </Stack>
                    <Stack
                        direction="row"
                        divider={<Divider />}
                        spacing={1.5}
                        sx={{ mt: '16px' }}
                        alignItems='center'
                    >
                        <Item>
                            <Typography variant="h3" sx={styles.timer} >04</Typography>
                            <Typography variant="h3" sx={styles.timeCat} >Days</Typography>
                        </Item>
                        <Item>
                            <Typography variant="h3" sx={styles.timer} >16</Typography>
                            <Typography variant="h3" sx={styles.timeCat} >Hours</Typography>
                        </Item>
                        <Item>
                            <Typography variant="h3" sx={styles.timer} >24</Typography>
                            <Typography variant="h3" sx={styles.timeCat} >Minutes</Typography>
                        </Item>
                        <Item>
                            <Typography variant="h3" sx={styles.timer} >28</Typography>
                            <Typography variant="h3" sx={styles.timeCat} >Seconds</Typography>
                        </Item>
                    </Stack>
                    <Typography variant="p" sx={styles.lockAmount}>$20,000.00 USDT</Typography>
                </Box>
            </Box>
        </MainCard>
    )
}

export default TimeComponent