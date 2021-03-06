import React from "react";
import {
  getItem,
  RequestGet,
  RequestPut,
  RequestPost,
  RequestDelete,
} from "app/utils";
import MyHelmet from "app/components/header/MyHelmet";
import { Header, Footer } from "app/components";
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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
  CircularProgress,
} from "@material-ui/core";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ArrowDropDown, Edit, Delete } from "@material-ui/icons";
import { palette } from "assets/css/main";
const buttonStyle = {
  backgroundColor: palette.primary,
  color: "white",
  fontWeight: "bold",
};
const month = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
];
class KinerjaPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangePage = this.handleChangePage.bind(this);
    this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
    this.changeDate = this.handleChangeDate.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  state = {
    error: "",
    title: "Tambah",
    open: false,
    delete: false,
    edit: false,
    user_data: {},
    data_history: [],
    load: false,
    rowsPerPage: 10,
    page: 0,
    date: new Date(),
    description: "",
    metrix: "",
    volume: "",
    output: "",
    loading: true,
    download: false,
  };
  clear() {
    this.setState({ description: "", metrix: "", volume: "", output: "" });
  }
  handleChangeDate(v) {
    this.setState({ date: v });
    setTimeout(() => {
      this.getHistory();
    }, 200);
  }
  componentDidMount() {
    this.setState({
      user_data: JSON.parse(getItem("user_data")),
      date: new Date(),
    });
    this.getHistory();
  }
  reformat(date) {
    if (!date) {
      date = new Date();
    }
    const ye = date.getFullYear();
    const mo = month[date.getMonth()];
    const da = date.getDate();
    return ye + "-" + mo + "-" + da;
  }
  getHistory() {
    this.setState({ loading: true });
    var data = { date: this.reformat(this.state.date) };
    RequestGet("user/kinerja", data)
      .then((res) => {
        this.setState({ data_history: res.data.data, loading: false });
      })
      .catch((err) => {
        this.setState({ error: err.data.message, loading: false });
      });
  }
  saveEdit() {
    RequestPut("user/kinerja/" + this.state.id_kinerja, this.state)
      .then((res) => {
        this.setState({ open: false });
        this.clear();
        this.getHistory();
      })
      .catch((e) => {
        this.setState({ error: e.data.message });
      });
  }
  save() {
    RequestPost("user/kinerja", this.state)
      .then((res) => {
        this.setState({ open: false });
        this.getHistory();
        this.clear();
      })
      .catch((e) => {
        this.setState({ error: e.data.message });
      });
  }
  saveDelete(id) {
    RequestDelete("user/kinerja/" + id, this.state)
      .then((res) => {
        this.setState({ delete: false });
        this.getHistory();
      })
      .catch((e) => {
        this.setState({ error: e.data.message });
      });
  }
  downloadLaporan() {
    var da = this.reformat(this.state.date);
    const user = JSON.parse(getItem("user_data"));
    window.open(
      process.env.REACT_APP_API_BASE +
        "s/file/kinerja/" +
        user.id_user +
        "?date=" +
        da,
      "_blank"
    );
  }
  openEdit(v) {
    this.setState(v);
    this.setState({
      open: true,
      title: "Edit Laporan Kinerja",
      edit: true,
    });
  }

  handleChangePage = (event, newPage) => {
    this.setState({ page: newPage });
  };

  handleChangeRowsPerPage = (event) => {
    this.setState({ rowsPerPage: event.target.value });
    this.setState({ page: 0 });
  };
  handleClose() {
    this.setState({ open: false, title: "", delete: false });
  }
  render() {
    return (
      <div>
        <MyHelmet title={"History"} />
        <Header shadow={true} linkgroup={true} />
        <div style={{ paddingTop: 100 }}>
          <Grid
            container
            // direction="column"
            justify="center"
            alignItems="center"
            style={{ width: "100vw", marginTop: 40 }}
          >
            <Grid item lg={10} md={10} sm={10} xs={10}>
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
                }
              >
                Tambah Kinerja Harian
              </Button>
              <Grid container alignItems="center">
                <Typography style={{ marginRight: 5 }}>
                  Laporan Kinerja Harian, Tampilkan data Tanggal:
                </Typography>
                <div className="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl">
                  <DatePicker
                    maxDate={new Date()}
                    selected={this.state.date}
                    onChange={this.changeDate}
                    dateFormat={"dd-MM-yyyy"}
                    className={"MuiInputBase-input MuiInput-input"}
                  />
                  <ArrowDropDown style={{ position: "absolute", right: 10 }} />
                </div>
                <Button
                  disabled={this.state.download}
                  style={{
                    ...buttonStyle,
                    backgroundColor: !this.state.download ? "#35b135" : "grey",
                    marginLeft: 10,
                  }}
                  onClick={() => this.downloadLaporan()}
                >
                  Download
                  {this.state.download && (
                    <CircularProgress
                      style={{ width: 20, height: 20, marginLeft: 20 }}
                    />
                  )}
                </Button>
              </Grid>
              <Dialog
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby="form-dialog-title"
              >
                <DialogTitle id="form-dialog-title">
                  {this.state.title}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Masukkan data kegiatan Anda. Data hanya bisa di ubah di hari
                    yang sama!
                  </DialogContentText>
                  <TextField
                    onChange={(e) => {
                      this.setState({ description: e.target.value });
                    }}
                    value={this.state.description}
                    InputLabelProps={{ shrink: true }}
                    autoFocus
                    multiline
                    style={{ marginTop: 20 }}
                    rowsMax={6}
                    rows={4}
                    placeholder="Masukkan kegiatan Anda"
                    margin="dense"
                    id="kegiatan"
                    label="Kegiatan"
                    type="text"
                    fullWidth
                  />
                  <TextField
                    onChange={(e) => {
                      this.setState({ metrix: e.target.value });
                    }}
                    value={this.state.metrix}
                    InputLabelProps={{ shrink: true }}
                    style={{ marginTop: 20 }}
                    margin="dense"
                    placeholder="Tulis satuan yang dibutuhkan. contoh 1 hari, 1 jam"
                    id="satuan"
                    label="Satuan"
                    type="text"
                    fullWidth
                  />
                  <TextField
                    onChange={(e) => {
                      this.setState({ volume: e.target.value });
                    }}
                    value={this.state.volume}
                    InputLabelProps={{ shrink: true }}
                    style={{ marginTop: 20 }}
                    margin="dense"
                    id="volume"
                    label="Volume"
                    placeholder="Masukkan volume yang anda hasilkan"
                    type="text"
                    fullWidth
                  />
                  <TextField
                    onChange={(e) => {
                      this.setState({ output: e.target.value });
                    }}
                    value={this.state.output}
                    InputLabelProps={{ shrink: true }}
                    style={{ marginTop: 20 }}
                    margin="dense"
                    id="output"
                    label="Output"
                    placeholder="Hasil dari kegiatan anda adalah. contoh dokumen"
                    type="text"
                    fullWidth
                  />
                  <p style={{ color: palette.error }}>{this.state.error}</p>
                </DialogContent>
                <DialogActions>
                  <Button onClick={this.handleClose} color="primary">
                    Batal
                  </Button>
                  {!this.state.edit && (
                    <Button onClick={() => this.save()} color="primary">
                      Simpan
                    </Button>
                  )}
                  {this.state.edit && (
                    <Button onClick={() => this.saveEdit()} color="primary">
                      Edit
                    </Button>
                  )}
                </DialogActions>
              </Dialog>
              <Dialog
                open={this.state.delete}
                onClose={this.handleClose}
                aria-labelledby="form-dialog-title-delete"
              >
                <DialogTitle id="form-dialog-title">
                  Hapus data kinerja harian
                </DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Apakah anda ingin menghapus data?
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={this.handleClose} color="primary">
                    Batal
                  </Button>
                  <Button
                    onClick={() => this.saveDelete(this.state.id_kinerja)}
                    color="secondary"
                  >
                    Hapus
                  </Button>
                </DialogActions>
              </Dialog>

              <TableContainer style={{ width: "100%" }}>
                <Table aria-label="table">
                  <TableHead>
                    <TableRow>
                      <TableCell variant="head">No</TableCell>
                      <TableCell variant="head" size="medium">
                        Kegiatan
                      </TableCell>
                      <TableCell variant="head">Satuan</TableCell>
                      <TableCell variant="head">Volume</TableCell>
                      <TableCell variant="head">Output</TableCell>
                      <TableCell variant="head">Kontrol</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.state.data_history.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={6}>
                          {this.state.loading ? "Mohon Tunggu..." : "No Data"}
                        </TableCell>
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
                            <TableCell>{val.description}</TableCell>
                            <TableCell>{val.metrix}</TableCell>
                            <TableCell>{val.volume}</TableCell>
                            <TableCell>{val.output}</TableCell>
                            <TableCell>
                              {val.can_edit === 1 && (
                                <div>
                                  <Edit
                                    onClick={() => this.openEdit(val)}
                                    color="primary"
                                    style={{ marginRight: 15 }}
                                  />
                                  <Delete
                                    onClick={() =>
                                      this.setState({
                                        delete: true,
                                        id_kinerja: val.id_kinerja,
                                      })
                                    }
                                    color="secondary"
                                  />
                                </div>
                              )}
                              {val.can_edit === 0 && "-"}
                            </TableCell>
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
export default KinerjaPage;
