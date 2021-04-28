import React from "react";
import {
  getItem,
  RequestDelete,
  RequestGet,
  RequestPost,
  RequestPut,
} from "app/utils";
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
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
} from "@material-ui/core";
import { palette } from "assets/css/main";
import { Delete, Edit, LockOpen } from "@material-ui/icons";
import alertData from "app/main/alert-data";

const buttonStyle = {
  backgroundColor: palette.primary,
  color: "white",
  fontWeight: "bold",
};

class DataPegawaiPage extends React.Component {
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
    filterValue: "",
    finalData: [],
    load: false,
    rowsPerPage: 10,
    page: 0,
    open: false,
    delete: false,
    username: "",
    fullname: "",
    level: "",
    position: "",
    disableSave: false,
    reset: false,
    location: "",
  };
  componentDidMount() {
    this.setState({ user_data: JSON.parse(getItem("user_data")) });
    this.getDataUser();
  }
  getDataUser() {
    RequestGet("user/list")
      .then(res => {
        this.setState({
          filterValue: "",
          data_history: res.data.data,
          load: true,
          finalData: res.data.data,
        });
      })
      .catch(err => {
        this.setState({ error: err.data.message, load: true });
      });
  }
  handleClose = () => {
    this.setState({ open: false, delete: false, reset: false });
  };
  saveUser = () => {
    this.setState({ disableSave: true });
    RequestPost("user/register", this.state)
      .then(r => {
        this.setState({
          username: "",
          fullname: "",
          level: "",
          position: "",
          location: "",
          disableSave: false,
        });
        this.handleClose();
        alertData.show("Success Create", "success");
        this.getDataUser();
      })
      .catch(e => {
        console.log(e);
        alertData.show(!e.data.message ? "Error" : e.data.message, "error");
        this.setState({ disableSave: false });
      });
  };

  editUser = () => {
    this.setState({ disableSave: true });
    RequestPut("user/edit/" + this.state.id_user, this.state)
      .then(() => {
        this.setState({
          username: "",
          fullname: "",
          level: "",
          position: "",
          location: "",
          disableSave: false,
        });
        this.getDataUser();
        this.handleClose();
        alertData.show("Berhasil mengubah data Pegawai", "success");
      })
      .catch(e => {
        console.log(e);
        alertData.show(!e.data.message ? "Error" : e.data.message, "error");
        this.setState({ disableSave: false });
      });
  };

  deleteUser = () => {
    this.setState({ disableSave: true });
    RequestDelete("user/delete/" + this.state.id_user)
      .then(() => {
        this.setState({ disableSave: false });

        alertData.show("Berhasil menghapus data Pegawai", "success");
        this.getDataUser();
      })
      .catch(e => {
        this.setState({ disableSave: false });

        alertData.show(!e.data.message ? "Error" : e.data.message, "error");
      })
      .finally(() => {
        this.handleClose();
      });
  };

  resetPassword = () => {
    this.setState({ disableSave: true });
    RequestPut("user/reset/" + this.state.id_user)
      .then(() => {
        this.setState({ disableSave: false });

        alertData.show("Atur ulang password, berhasil", "success");
        this.getDataUser();
      })
      .catch(e => {
        this.setState({ disableSave: false });

        alertData.show(!e.data.message ? "Error" : e.data.message, "error");
      })
      .finally(() => {
        this.handleClose();
      });
  };

  handleSearch() {
    const data = this.state.data_history;
    this.setState({
      finalData: this.state.filterValue
        ? data.filter(item => {
            return item.username.indexOf(this.state.filterValue) >= 0;
          })
        : data,
    });
  }

  handleChangePage = (event, newPage) => {
    this.setState({ page: newPage });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
    this.setState({ page: 0 });
  };
  render() {
    const {
      open,
      edit,
      error,
      username,
      fullname,
      level,
      position,
      location,
      disableSave,
      reset,
    } = this.state;
    return (
      <div>
        <Dialog
          open={open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">
            {edit ? "Ubah data pegawai" : "Tambah data Pegawai"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>Detail data pegawai</DialogContentText>
            <TextField
              disabled={edit}
              onChange={e => {
                this.setState({
                  username: e.target.value,
                  password: e.target.value,
                });
              }}
              value={username}
              InputLabelProps={{ shrink: true }}
              autoFocus
              placeholder="Masukkan NIP"
              margin="dense"
              id="nip"
              label="Nip"
              type="text"
              fullWidth
            />
            <TextField
              onChange={e => {
                this.setState({ fullname: e.target.value });
              }}
              value={fullname}
              InputLabelProps={{ shrink: true }}
              style={{ marginTop: 20 }}
              margin="dense"
              placeholder="Masukkan Nama Lengkap"
              id="fullname"
              label="Nama Lengkap"
              type="text"
              fullWidth
            />
            <TextField
              onChange={e => {
                this.setState({ level: e.target.value });
              }}
              value={level}
              InputLabelProps={{ shrink: true }}
              style={{ marginTop: 20 }}
              margin="dense"
              id="gol"
              label="Golongan"
              placeholder="Masukkan golongan"
              type="text"
              fullWidth
            />
            <TextField
              onChange={e => {
                this.setState({ position: e.target.value });
              }}
              value={position}
              InputLabelProps={{ shrink: true }}
              style={{ marginTop: 20 }}
              margin="dense"
              id="position"
              label="Jabatan"
              placeholder="Masukkan Jabatan"
              type="text"
              fullWidth
            />
            <TextField
              onChange={e => {
                this.setState({ location: e.target.value });
              }}
              value={location}
              InputLabelProps={{ shrink: true }}
              style={{ marginTop: 20 }}
              margin="dense"
              id="satker"
              label="Satuan Kerja"
              placeholder="Masukkan Satuan Kerja"
              type="text"
              fullWidth
            />
            <p style={{ color: palette.error }}>{error}</p>
          </DialogContent>
          <DialogActions>
            <Button
              disabled={disableSave}
              onClick={() => this.setState({ open: false })}
              color="primary">
              Batal
            </Button>
            {!edit && (
              <Button
                disabled={disableSave}
                onClick={() => this.saveUser()}
                color="primary">
                Simpan
              </Button>
            )}
            {edit && (
              <Button
                disabled={disableSave}
                onClick={() => this.editUser()}
                color="primary">
                Ubah
              </Button>
            )}
          </DialogActions>
        </Dialog>
        <Dialog
          open={this.state.delete}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title-delete">
          <DialogTitle id="form-dialog-title">Hapus data Pegawai</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Apakah anda ingin menghapus data?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              disabled={disableSave}
              onClick={this.handleClose}
              color="primary">
              Batal
            </Button>
            <Button
              disabled={disableSave}
              onClick={() => this.deleteUser()}
              color="secondary">
              Hapus
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={reset}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title-delete">
          <DialogTitle id="form-dialog-title">Atur ulang Password</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Password akan berubah mengikuti NIP(Username). Demi keamanan
              setelah password diubah, diharapkan pegawai terkait untuk segera
              mengubah password setelah login.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              disabled={disableSave}
              onClick={this.handleClose}
              color="primary">
              Batal
            </Button>
            <Button
              disabled={disableSave}
              onClick={() => this.resetPassword()}
              color="secondary">
              Atur ulang
            </Button>
          </DialogActions>
        </Dialog>
        <MyHelmet title={"History"} />
        <Header shadow={true} linkgroup={true} />
        <div style={{ padding: "100px 0px" }}>
          <Grid container justify="center" alignItems="center">
            <Grid item lg={10} md={10} sm={10} xs={10}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}>
                <Typography>Data Pegawai</Typography>
                <Button
                  style={{
                    ...buttonStyle,
                    marginBottom: 20,
                  }}
                  onClick={() =>
                    this.setState({
                      open: true,
                      title: "Tambah Laporan Kinerja",
                      edit: false,
                    })
                  }>
                  Tambah Pegawai
                </Button>
              </div>
              <TextField
                onChange={e => {
                  this.setState({ filterValue: e.target.value }, () => {
                    this.handleSearch();
                  });
                }}
                value={this.state.filterValue}
                InputLabelProps={{ shrink: true }}
                style={{ marginTop: 20, width: 300, marginBottom: 20 }}
                placeholder="Cari NIP"
                // label="Cari"
                fullWidth
              />
              <TableContainer>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      <TableCell variant="head">No</TableCell>
                      <TableCell variant="head" size="medium">
                        NIP
                      </TableCell>
                      <TableCell variant="head">Nama</TableCell>
                      <TableCell variant="head">Golongan</TableCell>
                      <TableCell variant="head">Jabatan</TableCell>
                      <TableCell variant="head">Satuan Kerja</TableCell>
                      <TableCell variant="head"></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.state.data_history.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={7}>No Data</TableCell>
                      </TableRow>
                    )}
                    {this.state.finalData
                      .slice(
                        this.state.page * this.state.rowsPerPage,
                        this.state.page * this.state.rowsPerPage +
                          this.state.rowsPerPage
                      )
                      .map((val, key) => {
                        return (
                          <TableRow key={key}>
                            <TableCell>
                              {this.state.page * this.state.rowsPerPage +
                                (1 + key)}
                            </TableCell>
                            <TableCell>{val.username}</TableCell>
                            <TableCell>{val.fullname}</TableCell>
                            <TableCell>
                              {/* <Moment format="HH:mm" local> */}
                              {val.level}
                              {/* </Moment> */}
                            </TableCell>
                            <TableCell>{val.position}</TableCell>
                            <TableCell>{val.location}</TableCell>
                            <TableCell>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                }}>
                                <Button
                                  style={{ width: 30 }}
                                  onClick={() =>
                                    this.setState({
                                      ...val,
                                      edit: true,
                                      open: true,
                                    })
                                  }>
                                  <Edit
                                    style={{ fontSize: 18, color: "orange" }}
                                  />
                                </Button>
                                <Button
                                  style={{ width: 30 }}
                                  title={"Reset password pegawai"}
                                  onClick={() =>
                                    this.setState({
                                      id_user: val.id_user,
                                      reset: true,
                                    })
                                  }>
                                  <LockOpen
                                    style={{ fontSize: 18, color: "grey" }}
                                  />
                                </Button>
                                <Button
                                  style={{ width: 30 }}
                                  onClick={() =>
                                    this.setState({
                                      delete: true,
                                      id_user: val.id_user,
                                    })
                                  }>
                                  <Delete
                                    style={{ fontSize: 18, color: "red" }}
                                  />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
                <TablePagination
                  rowsPerPageOptions={[10, 25, 100]}
                  component="div"
                  count={this.state.finalData.length}
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
export default DataPegawaiPage;
