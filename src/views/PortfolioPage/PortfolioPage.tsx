import { Chip, CircularProgress, Container, Grid, InputAdornment, Typography } from '@material-ui/core';
import { Close, FilterList } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Button from '../../components/CustomButtons/ButtonLink';
import CustomInput from '../../components/CustomInput/CustomInput';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import HeaderLinks from '../../components/Header/HeaderLinks';
import Parallax from '../../components/Parallax/Parallax';
import PortfolioDetailModal from '../../components/PortfolioDetailModal/PortfolioDetailModal';
import PortfolioItemCard from '../../components/PortfolioItemCard/PortfolioItemCard';

const useStyles = makeStyles(() => ({
  profile: {
    textAlign: 'center',
  },
  pageHeader: {
    padding: '40px 20px 20px',
    textAlign: 'center',
  },
  pageTitle: {
    fontSize: '3rem',
    fontWeight: 700,
    marginBottom: '8px',
    color: '#3c4858',
  },
  pageSubtitle: {
    fontSize: '1.3rem',
    fontWeight: 400,
    marginBottom: '12px',
    color: '#555',
  },
  pageDescription: {
    fontSize: '1.1rem',
    maxWidth: '800px',
    margin: '0 auto',
    color: '#666',
    lineHeight: 1.6,
  },
  content: {
    paddingBottom: 30,
    paddingTop: 0,
    margin: '0 auto 30px',
  },
  main: {
    background: '#FFFFFF',
    position: 'relative',
    zIndex: 3,
  },
  mainRaised: {
    margin: '-40px 30px 0px',
    borderRadius: '6px',
    boxShadow:
      '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
  },
  title: {
    display: 'inline-block',
    position: 'relative',
    marginTop: '30px',
    minHeight: '32px',
    textDecoration: 'none',
  },
  filterSection: {
    marginBottom: '30px',
    marginTop: '20px',
  },
  filterInputContainer: {
    marginBottom: '24px',
  },
  tagSection: {
    textAlign: 'center',
    marginTop: '24px',
  },
  tagButtons: {
    marginTop: '16px',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    justifyContent: 'center',
  },
  tagLabel: {
    color: '#666',
    marginBottom: '8px',
  },
  portfolioGrid: {
    '&>*': {
      transition: 'all 300ms ease',
    },
  },
  filterStats: {
    textAlign: 'center',
    marginTop: '10px',
    color: '#999',
    fontSize: '14px',
  },
  clearButton: {
    marginLeft: '10px',
  },
  loading: {
    textAlign: 'center',
    padding: '60px 0',
    color: '#999',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
  },
}));

interface TrelloCard {
  id: string;
  name: string;
  desc: string;
  due: string | null;
  dueComplete: boolean;
  closed: boolean;
  labels: Array<{ id: string; name: string; color: string }>;
  attachments: Array<{
    id: string;
    name: string;
    url: string;
    previews?: Array<{ url: string; height: number; width: number }>;
  }>;
  idAttachmentCover: string;
}

interface TrelloData {
  cards: TrelloCard[];
  labels: Array<{ id: string; name: string; color: string }>;
}

const PortfolioPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const [data, setData] = useState<TrelloData>({ cards: [], labels: [] });
  const [loading, setLoading] = useState(true);
  const [filterString, setFilterString] = useState('');
  const [selectedCard, setSelectedCard] = useState<TrelloCard | null>(null);

  useEffect(() => {
    loadData();
  }, []);

  // Handle deep linking from hash - only after data is loaded
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && data.cards.length > 0 && !loading) {
      const card = data.cards.find((c) => {
        const cardSlug = c.name
          .toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[^a-z0-9-]/g, '');
        return c.id === hash || cardSlug === hash;
      });
      if (card) {
        setSelectedCard(card);
      }
    }
  }, [location.hash, data.cards, loading]);

  const loadData = async () => {
    try {
      setLoading(true);
      const resp = await fetch('https://trello.com/b/bgLwimyQ/maxs-online-portfolio.json');
      const trelloData = await resp.json();
      setData(trelloData);
    } catch (error) {
      console.error('Error loading portfolio data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCardClick = (card: TrelloCard) => {
    setSelectedCard(card);
    const cardSlug = card.name
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');
    history.push(`/portfolio#${cardSlug}`);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
    history.push('/portfolio');
  };

  const filterCards = (cards: TrelloCard[]) => {
    const filterLower = filterString.trim().toLowerCase();

    return cards.filter((card) => {
      if (card.closed) return false;
      if (!filterLower) return true;

      const nameMatch = card.name.toLowerCase().includes(filterLower);
      const descMatch = card.desc?.toLowerCase().includes(filterLower);
      const labelMatch = card.labels.some((label) => label.name.toLowerCase().includes(filterLower));

      return nameMatch || descMatch || labelMatch;
    });
  };

  const sortedCards = [...data.cards].sort((a, b) => {
    const dateA = a.due ? new Date(a.due).getTime() : 0;
    const dateB = b.due ? new Date(b.due).getTime() : 0;
    return dateB - dateA; // Newest first
  });

  const filteredCards = filterCards(sortedCards);

  // Extract unique labels from cards for filter buttons
  const popularLabels = data.labels.filter((label) => label.name);

  const handleTagClick = (tagName: string) => {
    setFilterString(tagName);
  };

  const clearFilter = () => {
    setFilterString('');
  };

  document.title = 'Portfolio | Max Struever';

  return (
    <div>
      <Header
        color="transparent"
        brand="Max Struever"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: 'white',
        }}
      />
      <Parallax xSmall filter image={require('../../assets/img/nyc-bg.jpg')} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <Container>
            <div className={classes.pageHeader}>
              <h1 className={classes.pageTitle}>Portfolio</h1>
              <h2 className={classes.pageSubtitle}>Examples of My Work as a Developer</h2>
              <p className={classes.pageDescription}>
                I love all kinds of coding across the full stack! Use the filter below to search through my projects!
              </p>
            </div>
            <div className={classes.content}>
              {loading ? (
                <div className={classes.loading}>
                  <CircularProgress size={50} color="primary" />
                  <Typography variant="h6">Loading portfolio items from Trello...</Typography>
                </div>
              ) : (
                <>
                  <div className={classes.filterSection}>
                    <Grid container spacing={3} justify="center">
                      <Grid item xs={12} md={10}>
                        <div className={classes.filterInputContainer}>
                          <Grid container spacing={2} alignItems="center">
                            <Grid item xs={12} sm={filterString ? 9 : 12}>
                              <CustomInput
                                labelText="Search by name, description, or tag..."
                                id="portfolio-filter"
                                formControlProps={{
                                  fullWidth: true,
                                }}
                                inputProps={{
                                  value: filterString,
                                  onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                                    setFilterString(e.target.value);
                                  },
                                  placeholder: 'Try "React", "API", or any keyword...',
                                  endAdornment: (
                                    <InputAdornment position="end">
                                      <FilterList />
                                    </InputAdornment>
                                  ),
                                }}
                              />
                            </Grid>
                            {filterString && (
                              <Grid item xs={12} sm={3}>
                                <Button color="primary" onClick={clearFilter} fullWidth>
                                  <Close /> Clear
                                </Button>
                              </Grid>
                            )}
                          </Grid>
                        </div>

                        {popularLabels.length > 0 && (
                          <div className={classes.tagSection}>
                            <Typography variant="subtitle1" className={classes.tagLabel}>
                              Or try some tags:
                            </Typography>
                            <div className={classes.tagButtons}>
                              {popularLabels.map((label) => (
                                <Chip
                                  key={label.id}
                                  label={label.name}
                                  onClick={() => handleTagClick(label.name)}
                                  color="primary"
                                  variant={filterString === label.name ? 'default' : 'outlined'}
                                  style={{ cursor: 'pointer' }}
                                />
                              ))}
                            </div>
                          </div>
                        )}

                        <div className={classes.filterStats}>
                          Found: <strong>{filteredCards.length}</strong>{' '}
                          {filteredCards.length === 1 ? 'project' : 'projects'}
                        </div>
                      </Grid>
                    </Grid>
                  </div>

                  <Grid container spacing={3} className={classes.portfolioGrid}>
                    {filteredCards.map((card) => (
                      <Grid item xs={12} sm={6} md={4} key={card.id}>
                        <PortfolioItemCard card={card} onClick={() => handleCardClick(card)} />
                      </Grid>
                    ))}
                  </Grid>

                  {filteredCards.length === 0 && !loading && (
                    <div className={classes.loading}>
                      <Typography variant="h6">No portfolio items found. Try a different search.</Typography>
                    </div>
                  )}
                </>
              )}
            </div>
          </Container>
        </div>
      </div>

      {selectedCard && <PortfolioDetailModal card={selectedCard} onClose={handleCloseModal} />}

      <Footer />
    </div>
  );
};

export default PortfolioPage;
