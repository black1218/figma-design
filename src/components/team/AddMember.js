import React, { Fragment, useState } from "react";
import Switch from "react-switch";
import Input from "../../assets/Input";
import { GrayButton, BlueButton } from "../../assets/Buttons";
import { Typography, Grid, Box } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

const AddMember = () => {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);

    const handleChange1 = (value) => {
        setChecked1(value);
    };

    const handleChange2 = (value) => {
        setChecked2(value);
    };

    return (
        <Fragment>
            <Grid container spacing={2} sx={{ my: 1 }}>
                <Grid item xs={0.5}></Grid>
                <Grid item xs={11.5}>
                    <Typography variant="h4" fontWeight={600}>
                        Team members
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ my: 1 }}>
                <Grid item xs={0.5} alignSelf="center">
                    <RemoveCircleIcon color="disabled" />
                </Grid>
                <Grid item container xs={9.5} spacing={2}>
                    <Grid item xs={6}>
                        <Input label="Member Name" placeholder="Member Name" />
                    </Grid>
                    <Grid item xs={6}>
                        <Input label="Member Name" placeholder="Member Name" />
                    </Grid>
                </Grid>
                <Grid
                    item
                    xs={2}
                    alignSelf="center"
                    sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                    <Switch
                        onColor="#2400FF"
                        checkedIcon={false}
                        uncheckedIcon={false}
                        onChange={handleChange1}
                        checked={checked1}
                    />
                    <Typography>Manager</Typography>
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ my: 1 }}>
                <Grid item xs={0.5} alignSelf="center">
                    <RemoveCircleIcon color="disabled" />
                </Grid>
                <Grid item container xs={9.5} spacing={2}>
                    <Grid item xs={6}>
                        <Input label="Member Name" placeholder="Member Name" />
                    </Grid>
                    <Grid item xs={6}>
                        <Input label="Member Name" placeholder="Member Name" />
                    </Grid>
                </Grid>
                <Grid
                    item
                    xs={2}
                    alignSelf="center"
                    sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                    <Switch
                        onColor="#2400FF"
                        checkedIcon={false}
                        uncheckedIcon={false}
                        onChange={handleChange2}
                        checked={checked2}
                    />
                    <Typography>Manager</Typography>
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ my: 1 }}>
                <Grid item xs={0.5}></Grid>
                <Grid item container xs={9.5} spacing={2}>
                    <Grid item xs={6}>
                        <Input label="Member Name" placeholder="Member Name" />
                    </Grid>
                    <Grid item xs={6}>
                        <Input label="Member Name" placeholder="Member Name" />
                    </Grid>
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>
            <Grid container spacing={2} sx={{ my: 1 }}>
                <Grid item xs={0.5}></Grid>
                <Grid item container xs={9.5} spacing={2}>
                    <Grid item xs={6}>
                        <Input label="Member Name" placeholder="Member Name" />
                    </Grid>
                    <Grid item xs={6}>
                        <Input label="Member Name" placeholder="Member Name" />
                    </Grid>
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>
            <Grid container spacing={2} sx={{ my: 1 }}>
                <Grid item xs={0.5}></Grid>
                <Grid item xs={9.5}>
                    <GrayButton>
                        <AddCircleIcon />
                        <Typography>Add a member</Typography>
                    </GrayButton>
                    <Box sx={{ textAlign: "end", my: 1 }}>
                        <Typography>You can add more members later</Typography>
                    </Box>
                    <Box sx={{ textAlign: "end" }}>
                        <BlueButton style={{ width: "170px" }}>Continue</BlueButton>
                    </Box>
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>
        </Fragment>
    );
};

export default AddMember;
