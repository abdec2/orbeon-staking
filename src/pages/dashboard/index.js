import { useContext, useRef, useState } from 'react';

// material-ui
import {
    Avatar,
    AvatarGroup,
    Box,
    Button,
    Grid,
    List,
    ListItemAvatar,
    ListItemButton,
    ListItemSecondaryAction,
    ListItemText,
    MenuItem,
    Stack,
    TextField,
    Input,
    Typography,
    Paper,
    Select,
    InputLabel,
    FormControl,
    Radio,
    RadioGroup,
    FormControlLabel
} from '@mui/material';

import { Divider } from 'components/icons'

// project import
import OrdersTable from './OrdersTable';
import IncomeAreaChart from './IncomeAreaChart';
import MonthlyBarChart from './MonthlyBarChart';
import ReportAreaChart from './ReportAreaChart';
import SalesColumnChart from './SalesColumnChart';
import MainCard from 'components/MainCard';
import StakingDetail from 'components/cards/statistics/StakingDetails';
import ApyCard from 'components/cards/statistics/ApyCard';
import { styled } from '@mui/material/styles';
import TimeComponent from 'components/TimeComponent';


// assets
import { GiftOutlined, MessageOutlined, SettingOutlined } from '@ant-design/icons';
import avatar1 from 'assets/images/users/avatar-1.png';
import avatar2 from 'assets/images/users/avatar-2.png';
import avatar3 from 'assets/images/users/avatar-3.png';
import avatar4 from 'assets/images/users/avatar-4.png';
import { USDT, ORBN } from "components/icons"
import { GlobalContext } from 'context/GlobalContext';

// avatar style
const avatarSX = {
    width: 36,
    height: 36,
    fontSize: '1rem'
};

// styles
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

// action style
const actionSX = {
    mt: 0.75,
    ml: 1,
    top: 'auto',
    right: 'auto',
    alignSelf: 'flex-start',
    transform: 'none'
};

// sales report status
const status = [
    {
        value: 'today',
        label: 'Today'
    },
    {
        value: 'month',
        label: 'This Month'
    },
    {
        value: 'year',
        label: 'This Year'
    }
];

const Token = styled(Paper)(({ theme }) => ({
    background: "#ffffff",
    borderRadius: 0,
    padding: "12px",
    boxShadow: "none",
    width: "100%"
}))


// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = () => {
    
    const { blockchainData } = useContext(GlobalContext)
    const amount = useRef()
    const pid = useRef()

    const handleRewards = async () => {
        console.log('amount', amount)
        console.log('pid', pid)
    }

    const handleStake = async () => {

    }
    
    return (
        <Grid container rowSpacing={4.5} columnSpacing={3.75} sx={{ paddingTop: '5px' }}>
            {/* row 1 */}
            <Grid item xs={12} sm={12} md={4} lg={4}>
                <StakingDetail title="Total Value Locked" count="$8,674,523.80" />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
                <ApyCard title="APY Rate" />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
                <StakingDetail title="Stakers" count={blockchainData.stakers.toString()} />
            </Grid>

            {/* row 2 */}
            <Grid item xs={12} md={6} lg={5}>
              <TimeComponent />
            </Grid>
            <Grid item xs={12} md={6} lg={7}>
                <MainCard>
                    <Box>
                        <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between">
                            <Typography variant="h4" sx={{ fontWeight: 700 }} >Staking</Typography>
                            <Stack direction="row" spacing={2.5}>
                                <select style={styles.selectBox}>
                                    <option value="1">Staked</option>
                                </select>
                                <select style={{ ...styles.selectBox, width: '150px' }}>
                                    <option value="1">Last Week</option>
                                </select>
                            </Stack>
                        </Stack>
                        <Box>
                            <div style={{ marginTop: '32px' }}>
                                <span style={{ ...styles.stakeChartvalue, color: '#F40E0E' }}>58,568.25</span>
                                <span style={{ ...styles.stakeChartvalue, fontWeight: 400, fontSize: '16px' }}> / ORBN Staked</span>
                            </div>
                        </Box>
                    </Box>
                    <IncomeAreaChart />
                </MainCard>
            </Grid>

            {/* row 3 */}
            <Grid item xs={12} md={7} lg={7} >
                <MainCard >
                    <Grid container>
                        <Grid item xs={12} sm={6} sx={{ px: 1, mb: 2, sm: { mb: 0 } }}>
                            <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }} >Amount to Stake</Typography>
                            <input ref={amount} style={{ ...styles.txtInput }} placeholder="Amount" />
                        </Grid>
                        <Grid item xs={12} sm={6} sx={{ px: 1, mb: 2, sm: { mb: 0 } }}>
                            <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }} >Lock Options</Typography>
                            <select ref={pid} style={{ ...styles.txtInput }}>
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
                        </Grid>
                    </Grid>
                    <Box sx={{ px: 1, mb: 2 }}>
                        <Typography variant="h4" sx={{ fontWeight: 700 }} >Select Token</Typography>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="ORBN" control={<Radio sx={{ color: '#F5331E', '&.Mui-checked': { color: "#F5331E" } }} />} label="ORBN" />
                            <FormControlLabel value="USDT" control={<Radio sx={{ color: '#F5331E', '&.Mui-checked': { color: "#F5331E" } }} />} label="USDT" />
                        </RadioGroup>
                    </Box>
                    <Grid container>
                        <Grid item xs={12} sm={6} sx={{ px: 1, mb: 0.5 }}>
                            <Button sx={{ ...styles.btn }} onClick={handleRewards}>Claim Rewards</Button>
                        </Grid>
                        <Grid item xs={12} sm={6} sx={{ px: 1, mb: 0.5 }}>
                            <Button sx={{ ...styles.btn }} onClick={handleStake}>Stake</Button>
                        </Grid>
                    </Grid>

                </MainCard>
            </Grid>

            <Grid item xs={12} md={5} lg={5}>
                <MainCard>
                    <Box>
                        <Typography variant="h4" sx={{ fontWeight: 700, mb: 3.5 }} >Token Rate</Typography>
                        <Stack direction="column" spacing={2} alignItems="center" justifyContent="space-between">
                            <Token>
                                <Stack direction="row" alignItems="center" spacing={1.8}>
                                    <USDT />
                                    <Stack spacing={1.5}>
                                        <Stack direction="row" spacing={1.2} alignItems="center">
                                            <Typography variant="p" sx={{ fontWeight: 700, fontSize: '16px' }} >USDT</Typography>
                                            <div style={{ width: "1px", height: "10px", background: "#C7C8CC" }}></div>
                                            <Typography variant="p" sx={{ fontWeight: 400, fontSize: '16px', color: "#000515", opacity: 0.7 }} >Tether USD</Typography>
                                        </Stack>
                                        <Typography variant="p" sx={{ fontWeight: 700, fontSize: '16px' }} >$1.000 USD</Typography>
                                    </Stack>
                                </Stack>
                            </Token>
                            <Token>
                                <Stack direction="row" alignItems="center" spacing={1.8}>
                                    <ORBN />
                                    <Stack spacing={1.5}>
                                        <Stack direction="row" spacing={1.2} alignItems="center">
                                            <Typography variant="p" sx={{ fontWeight: 700, fontSize: '16px' }} >USDT</Typography>
                                            <div style={{ width: "1px", height: "10px", background: "#C7C8CC" }}></div>
                                            <Typography variant="p" sx={{ fontWeight: 400, fontSize: '16px', color: "#000515", opacity: 0.7 }} >Orbeon Protocol</Typography>
                                        </Stack>
                                        <Typography variant="p" sx={{ fontWeight: 700, fontSize: '16px' }} >$28.000 USD</Typography>
                                    </Stack>
                                </Stack>
                            </Token>
                        </Stack>
                    </Box>
                </MainCard>
            </Grid>


        </Grid>
    );
};

export default DashboardDefault;
