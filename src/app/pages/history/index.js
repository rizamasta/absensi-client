import React from "react";
import { getItem, RequestGet } from "app/utils";
import MyHelmet from "app/components/header/MyHelmet";
import { Header, Footer } from "app/components";
import Moment from "react-moment";
import {
  Grid,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
} from "@material-ui/core";
class HistoryPage extends React.Component {
  constructor(props) {
    super(props);
    if (!getItem("token")) {
      this.props.history.push("/user/login");
    }
    this.handleChangePage = this.handleChangePage.bind(this);
    this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
  }
  state = {
    user_data: {},
    data_history: [],
    load: false,
    rowsPerPage: 10,
    page: 0,
  };
  componentDidMount() {
    this.setState({ user_data: JSON.parse(getItem("user_data")) });
    this.getHistory();
  }
  getHistory() {
    RequestGet("absensi/list")
      .then((res) => {
        this.setState({ data_history: res.data.data, load: true });
      })
      .catch((err) => {
        this.setState({ error: err.data.message, load: true });
      });
  }

  handleChangePage = (event, newPage) => {
    this.setState({ page: newPage });
  };

  handleChangeRowsPerPage = (event) => {
    this.setState({ rowsPerPage: event.target.value });
    this.setState({ page: 0 });
  };
  render() {
    return (
      <div>
        <MyHelmet title={"History"} />
        <Header shadow={true} linkgroup={true} />
        <div style={{ paddingTop: 100 }}>
          <Grid container justify="center" alignItems="center">
            <Grid item lg={10} md={10} sm={10} xs={10}>
              <Typography>Data Absensi per 30 hari</Typography>
              <TableContainer>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      <TableCell>No</TableCell>
                      <TableCell>Tanggal</TableCell>
                      <TableCell>Masuk</TableCell>
                      <TableCell>Pulang</TableCell>
                      <TableCell>Durasi</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.state.data_history.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={5}>No Data</TableCell>
                      </TableRow>
                    )}
                    {this.state.data_history
                      .slice(
                        this.state.page * this.state.rowsPerPage,
                        this.state.page * this.state.rowsPerPage +
                          this.state.rowsPerPage
                      )
                      .map((val, key) => {
                        return (
                          <TableRow key={key}>
                            <TableCell>{this.state.page + 1 + key}</TableCell>
                            <TableCell>
                              <Moment format="DD - MMM - YYYY" local>
                                {val.punch_in}
                              </Moment>
                            </TableCell>
                            <TableCell>
                              <Moment format="HH:mm" local>
                                {val.punch_in}
                              </Moment>
                            </TableCell>
                            <TableCell>
                              <Moment format="HH:mm" local>
                                {val.punch_out}
                              </Moment>
                            </TableCell>
                            <TableCell>{val.duration}</TableCell>
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
                <TablePagination
                  rowsPerPageOptions={[10, 25, 100]}
                  component="div"
                  count={this.state.data_history.length}
                  rowsPerPage={this.state.rowsPerPage}
                  page={this.state.page}
                  onChangePage={this.handleChangePage}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage}
                />
              </TableContainer>
            </Grid>
          </Grid>
        </div>
        <Footer />
      </div>
    );
  }
}
export default HistoryPage;
