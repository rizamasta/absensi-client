import React from "react";
import MyHelmet from "app/components/header/MyHelmet";
import PrimaryAppBar from "app/components/header/PrimaryAppBar";
import { Typography, Grid } from "@material-ui/core";
import { palette } from "assets/css/main";
import { Footer } from "app/components";
const content = {
  fontWeight: "bold",
  color: palette.primary,
  fontSize: 18,
};
const syarat = [
  "Merupakan Pegawai yang terdaftar.",
  "Mengikuti aturan website.",
  "Tidak boleh diwakilkan",
];
const ketentuan = [
  "Silahkan update password setelah login.",
  "Jika password tidak di ubah, kami tidak bertanggung jawab atas data Absensi Anda.",
  "Absen hanya bisa dilakukan 1 kali dalam satu hari.",
  "Admin tidak bertanggung jawab atas kesalahan Pengguna.",
];

export default class TermCondition extends React.Component {
  render() {
    return (
      <React.Fragment>
        <PrimaryAppBar shadow={true} linkgroup={true} />
        <MyHelmet
          title="Syarat & Ketentuan"
          description="Syarat dan ketentuan Absensi"
        />
        <div
          style={{
            paddingTop: 80,
            paddingBottom: 40,
            paddingRight: 20,
            paddingLeft: 20,
          }}
        >
          <Typography
            style={{ ...content, fontSize: 32, fontWeight: "bolder" }}
          >
            Syarat & Ketentuan
          </Typography>
        </div>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="flex-start"
          style={{
            backgroundColor: palette.primary,
            height: "100vh",
            paddingTop: 40,
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <Typography
            style={{
              fontWeight: "bold",
              fontSize: 24,
              width: "100%",
              color: "white",
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            Syarat:
          </Typography>
          {syarat.map((v, k) => {
            return (
              <Typography
                key={k}
                style={{
                  fontWeight: "bold",
                  fontSize: 18,
                  color: "white",
                }}
              >
                {k + 1}
                {". " + v}
              </Typography>
            );
          })}
          <Typography
            style={{
              marginTop: 40,
              fontWeight: "bold",
              fontSize: 24,
              width: "100%",
              color: "white",
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            Ketentuan:
          </Typography>
          {ketentuan.map((v, k) => {
            return (
              <Typography
                key={k}
                style={{
                  fontWeight: "bold",
                  fontSize: 18,
                  color: "white",
                }}
              >
                {k + 1}
                {". " + v}
              </Typography>
            );
          })}
        </Grid>
        <Footer />
      </React.Fragment>
    );
  }
}
