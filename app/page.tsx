import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Button, Container, Grid, Link, Typography } from "@mui/material";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <Container sx={{ marginY: 4 }}>
        <Grid
          container
          spacing={6}
          alignItems="center"
          padding={3}
          sx={{ border: "1px solid", borderRadius: "8px" }}
        >
          <Grid size={{ xs: 12, lg: 6 }}>
            <div style={{ marginBottom: "16px" }}>
              <Typography variant="h2" fontWeight={600} gutterBottom>
                Are you ready?
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Get started with our Youtube comments Dashboard.
              </Typography>
            </div>
          </Grid>
          <Grid
            size={{ xs: 12, lg: 6 }}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "16px",
            }}
          >
            <Link href="/youtubeComments">
              <Button
                variant="contained"
                color="secondary"
                size="large"
                endIcon={<ArrowRightIcon />}
                sx={{ color: "white" }}
              >
                Go to Dashboard
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}
