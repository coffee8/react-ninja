import {Pagination} from "@material-ui/lab";
import {useState} from "react";
import {Box, Divider, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    paginator: {
        justifyContent: "center",
        padding: "10px"
    }
}));

const MuiPagination = (props) => {
    const classes = useStyles();
    const itemsPerPage = props.pageSize;
    const numberOfPages = Math.ceil(props.totalUsersCount / itemsPerPage);
    const [page, setPage] = useState(1);

    const handleChange = (event, value) => {
        props.onPageChanged(value);
        setPage(value);
    };

    return (
        <Box>
            <Pagination count={numberOfPages}
                        page={page}
                        onChange={handleChange}
                        classes={{ul: classes.paginator}}
            />
            <Divider/>
        </Box>

    );
}

export default MuiPagination;