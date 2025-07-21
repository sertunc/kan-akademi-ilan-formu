import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Grid,
  MenuItem,
} from "@mui/material";
import type { BloodDonationRequest } from "../entities/BloodDonationRequest";

const initialForm: BloodDonationRequest = {
  bloodGroup: "",
  bloodGroupType: "",
  bloodType: "",
  patientName: "",
  phone: "",
  date: "",
  hospitalOrLocation: "",
};

const bloodGroups = ["A", "B", "AB", "0"];
const bloodGroupTypes = ["(+)", "(-)"];
const bloodTypes = ["Kırmızı Kan", "Trombosit", "Plazma", "Kök Hücre"];

const BloodDonationForm: React.FC = () => {
  const [form, setForm] = useState<BloodDonationRequest>(initialForm);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form Data Submitted:", form);
    // Here you can add code to send form to your server or API
  };

  return (
    <Container maxWidth="xs" sx={{ py: 2 }}>
      <Typography variant="h5" align="center" gutterBottom fontWeight={700}>
        Kan Bağışı İlanı
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 6, md: 6 }}>
            <TextField
              select
              label="Kan Grubu"
              name="bloodGroup"
              value={form.bloodGroup}
              onChange={handleChange}
              fullWidth
              required
            >
              {bloodGroups.map((group) => (
                <MenuItem key={group} value={group}>
                  {group}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid size={{ xs: 6, md: 6 }}>
            <TextField
              select
              label="Kan Grubu Türü"
              name="bloodGroupType"
              value={form.bloodGroupType}
              onChange={handleChange}
              fullWidth
              required
            >
              {bloodGroupTypes.map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              select
              label="Bağış Türü"
              name="bloodType"
              value={form.bloodType}
              onChange={handleChange}
              fullWidth
              required
            >
              {bloodTypes.map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              label="Hasta Adı"
              name="patientName"
              value={form.patientName}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              label="Telefon"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              fullWidth
              required
              type="tel"
              inputProps={{ inputMode: "tel", pattern: "[0-9 ]*" }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              label="Tarih"
              name="date"
              type="date"
              value={form.date}
              onChange={handleChange}
              fullWidth
              required
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              label="Hastane / Bağış Yeri"
              name="hospitalOrLocation"
              value={form.hospitalOrLocation}
              onChange={handleChange}
              fullWidth
              required
              multiline
              minRows={5}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              size="large"
            >
              Gönder
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default BloodDonationForm;
