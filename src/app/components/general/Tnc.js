import React from "react";
import { withTranslation } from "react-i18next";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  Button
} from "@material-ui/core";
import { palette, WHITE_BUTTON } from "assets/css/main";
class Tnc extends React.Component {
  render() {
    const { t, visible, handleClose } = this.props;
    return (
      <Dialog
        disableBackdropClick
        onClose={() => handleClose(false)}
        open={visible}
        scroll={"paper"}
        style={{ color: palette.primary }}>
        <DialogTitle>
          <span
            style={{
              textTransform: "uppercase",
              fontWeight: "bolder",
              color: palette.primary
            }}>
            Term And Conditions
          </span>
        </DialogTitle>
        <DialogContent style={{ color: palette.primary, padding: 0 }}>
          <div style={{ paddingLeft: 20, paddingRight: 20 }}>
            <strong>1. Introduction</strong>
            <p style={{ textAlign: "justify" }}>
              Please read this web page carefully. It contains the Terms and
              Conditions governing your access to and use of the Hiregrade
              Website. Your use of the services and facilities of the Hiregrade
              Website indicates your acceptance of these Terms and Conditions.
              If you do not accept these Terms and Conditions or you do not meet
              or comply with their provisions, you may not use the Site. If you
              are a Job Seeker using the Site, any terms in these Terms and
              Conditions or Exhibits that are expressed to apply solely to
              Recruiters do not apply to you. If you are an Recruiter using the
              Site, you may have also entered into a Service Agreement with
              Hiregrade, in which case these Terms and Conditions, including the
              Exhibits attached hereto but excluding any terms that are
              expressed to apply solely to Job Seekers, are part of and
              incorporated into that Service
            </p>
            <strong>2. Introduction</strong>
            <p style={{ textAlign: "justify" }}>
              Please read this web page carefully. It contains the Terms and
              Conditions governing your access to and use of the Hiregrade
              Website. Your use of the services and facilities of the Hiregrade
              Website indicates your acceptance of these Terms and Conditions.
              If you do not accept these Terms and Conditions or you do not meet
              or comply with their provisions, you may not use the Site. If you
              are a Job Seeker using the Site, any terms in these Terms and
              Conditions or Exhibits that are expressed to apply solely to
              Recruiters do not apply to you. If you are an Recruiter using the
              Site, you may have also entered into a Service Agreement with
              Hiregrade, in which case these Terms and Conditions, including the
              Exhibits attached hereto but excluding any terms that are
              expressed to apply solely to Job Seekers, are part of and
              incorporated into that Service
            </p>
          </div>
          <Grid
            container
            justify="space-between"
            style={{
              height: 70,
              backgroundColor: palette.primary,
              paddingLeft: 20,
              paddingRight: 20
            }}>
            <Button
              style={{ ...WHITE_BUTTON }}
              onClick={() => handleClose(true)}>
              {t("auth:agree")}
            </Button>
            <Button
              style={{ ...WHITE_BUTTON }}
              onClick={() => handleClose(false)}>
              {t("auth:disagree")}
            </Button>
          </Grid>
        </DialogContent>
      </Dialog>
    );
  }
}
export default withTranslation()(Tnc);
