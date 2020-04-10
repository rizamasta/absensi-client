import React from "react";
import MyHelmet from "app/components/header/MyHelmet";
import PrimaryAppBar from "app/components/header/PrimaryAppBar";
import {
  Typography,
  Grid,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from "@material-ui/core";
import { palette } from "assets/css/main";
import { Footer } from "app/components";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
const content = {
  fontWeight: "bold",
  color: palette.primary,
  fontSize: 18,
};
const data = [
  {
    question: "Bagaimana menggunakan website ini?",
    answer:
      "Pastikan Anda sudah didaftarkan oleh admin atau petugas yang bertanggung jawab, lalu silahkan masuk dengan mengklik tombol login",
  },
  {
    question: "Bagaimana mengubah password?",
    answer:
      "Setelah Anda masuk, silahkan klik menu Profil dan pada bagian bawah tampilan terdapat tombol Ubah Password",
  },
  {
    question: "Bagaimana Jika Lupa password?",
    answer: "Silahkan hubungi admin atau petugas yang bertanggung jawab",
  },
  {
    question: "Apa yang harus dipahami?",
    answer:
      "Sebelum Anda menggunakan website ini, silahkan pahami syarat dan ketentuan",
  },
];
export default class FAQPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <PrimaryAppBar shadow={true} linkgroup={true} />
        <MyHelmet title="Pertanyaan Umum" description="Pertanyaan Umum" />
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
            FAQ
          </Typography>
        </div>
        <Grid
          container
          justify="flex-start"
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
            {data.map((v, k) => {
              return (
                <ExpansionPanel key={k}>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography
                      style={{ fontWeight: "bold", color: palette.primary }}
                    >
                      {k + 1}
                      {". " + v.question}
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography>{v.answer}</Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              );
            })}
          </Typography>
        </Grid>
        <Footer />
      </React.Fragment>
    );
  }
}
