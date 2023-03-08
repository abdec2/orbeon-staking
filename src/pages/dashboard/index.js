import { useState } from 'react';

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
    Typography,
    Paper,
    Select,
    InputLabel,
    FormControl
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
import { styled } from '@mui/material/styles';


// assets
import { GiftOutlined, MessageOutlined, SettingOutlined } from '@ant-design/icons';
import avatar1 from 'assets/images/users/avatar-1.png';
import avatar2 from 'assets/images/users/avatar-2.png';
import avatar3 from 'assets/images/users/avatar-3.png';
import avatar4 from 'assets/images/users/avatar-4.png';

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

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#e5e5e5',
    borderRadius: 0,
    paddingTop: '1.25rem',
    paddingBottom: '1.25rem',
    textAlign: 'center',
    boxShadow: 'none',
    width: '68px'
}));


// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = () => {
    const [value, setValue] = useState('today');
    const [slot, setSlot] = useState('week');
    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <Grid container rowSpacing={4.5} columnSpacing={3.75} sx={{ paddingTop: '5px' }}>
            {/* row 1 */}
            <Grid item xs={12} sm={6} md={4} lg={4}>
                <StakingDetail title="Total Value Locked" count="$8,674,523.80" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
                <StakingDetail title="APY Rate" count="97.23%" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
                <StakingDetail title="Stakers" count="7538" />
            </Grid>

            {/* row 2 */}
            <Grid item xs={12} md={6} lg={5}>
                <MainCard >
                    <Box>
                        <Typography variant="h4" >Lock Period</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pt: 4.5, pb: 7, pl: 1, pr: 1, flexDirection: 'column' }}>
                            <Stack spacing={1}>
                                <Typography variant="p" sx={styles.lockPeriod}>Monday</Typography>
                                <Typography variant="p" sx={styles.lockPeriod}>Monday Dec 26,2022</Typography>
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
            </Grid>
            <Grid item xs={12} md={6} lg={7}>
                <MainCard>
                    <Box>
                        <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between">
                            <Typography variant="h4" sx={{ fontWeight: 700 }} >Staking</Typography>
                            <Stack direction="row" spacing={2.5}>
                                <select style={styles.selectBox}>
                                    <option value="">Select</option>
                                    <option value="1">Staked</option>
                                </select>
                                <select style={{...styles.selectBox, width: '150px'}}>
                                    <option value="">Select</option>
                                    <option value="1">Last Week</option>
                                </select>
                            </Stack>
                        </Stack>
                        <Box>
                            <div style={{marginTop: '32px'}}>
                                <span style={{...styles.stakeChartvalue, color: '#F40E0E'}}>58,568.25</span>
                                <span style={{...styles.stakeChartvalue, fontWeight: 400, fontSize: '16px'}}> / ORBN Staked</span> 
                            </div>
                        </Box>
                    </Box>
                    <IncomeAreaChart />
                </MainCard>
            </Grid>

            {/* row 3 */}
            <Grid item xs={12} md={6} lg={7}>
                <MainCard >
                    
                </MainCard>
            </Grid>
            <Grid item xs={12} md={6} lg={5}>
                <MainCard>
                    <Box>
                        <Typography variant="h4" sx={{ fontWeight: 700 }} >Token Rate</Typography>
                        <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between">
                            
                        </Stack>
                    </Box>
                </MainCard>
            </Grid>

            
        </Grid>
    );
};

export default DashboardDefault;
