import React, { useState } from 'react';
import { TextField, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  body: {
    backgroundColor: '#f5f5f5',
    fontFamily: 'Roboto, sans-serif',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
  root: {
    textAlign: 'center',
    '& h1': {
      fontSize: '3rem',
      marginBottom: '1rem',
      color: '#1976d2',
    
    },
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
    padding: '2rem',
    backgroundColor: '#fff',
    borderRadius: '5px',
    boxShadow: '0 3px 5px rgba(0,0,0,0.2)',
    '& .MuiTextField-root': {
      marginBottom: '1rem',
    },
  },
  
  submitButton: {
    backgroundColor: '#1976d2',
    color: '#fff',
    padding: '0.5rem 1rem',
    fontSize: '1.2rem',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease-in-out',
    '&:hover': {
      backgroundColor: '#1565c0',
    },
  },
  cvContainer: {
    width: '80%',
    maxWidth: '800px',
    padding: '2rem',
    backgroundColor: '#fff',
    borderRadius: '5px',
    boxShadow: '0 3px 5px rgba(0,0,0,0.2)',
    '& .MuiTypography-h2': {
      color: '#1976d2',
      marginBottom: '1rem',
    },
    '& .MuiTypography-h5': {
      marginBottom: '0.5rem',
    },
  },
});

function App() {
  const classes = useStyles();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [objectives, setObjectives] = useState('');
  const [skills, setSkills] = useState('');
  const [education, setEducation] = useState('');
  const [experience, setExperience] = useState('');
  const [summary, setSummary] = useState('');
  const [showCV, setShowCV] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowCV(true);
  };

  return (
    <div className={classes.body}>
      <div className={classes.root}>
        <h1>CV Builder</h1>
        {!showCV && (
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              required
              label="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              required
              label="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <TextField
              required
              type="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              required
              type="tel"
              label="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              />
              <TextField
              required
              label="Objectives"
              value={objectives}
              onChange={(e) => setObjectives(e.target.value)}
              multiline
              rows={4}
              />
              <TextField
              required
              label="Skills"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              multiline
              rows={4}
              />
              <TextField
              required
              label="Education"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              multiline
              rows={4}
              />
              <TextField
              required
              label="Experience"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              multiline
              rows={4}
              />
              <TextField
              required
              label="Summary"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              multiline
              rows={4}
              />
              <Button
                         type="submit"
                         variant="contained"
                         className={classes.submitButton}
                       >
              Generate CV
              </Button>
              </form>
              )}
              {showCV && (
              <div className={classes.cvContainer}>
              <Typography variant="h2">
              {firstName} {lastName}
              </Typography>
              <Typography variant="h5">{email}</Typography>
              <Typography variant="h5">{phone}</Typography>
              <br />
              <Typography variant="h4">Objectives</Typography>
              <Typography variant="body1">{objectives}</Typography>
              <br />
              <Typography variant="h4">Skills</Typography>
              <Typography variant="body1">{skills}</Typography>
              <br />
              <Typography variant="h4">Education</Typography>
              <Typography variant="body1">{education}</Typography>
              <br />
              <Typography variant="h4">Experience</Typography>
              <Typography variant="body1">{experience}</Typography>
              <br />
              <Typography variant="h4">Summary</Typography>
              <Typography variant="body1">{summary}</Typography>
              </div>
              )}
              </div>
              </div>
              );
              }
              
              export default App;
