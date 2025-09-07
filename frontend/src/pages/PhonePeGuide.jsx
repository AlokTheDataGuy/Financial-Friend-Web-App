import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Download, History, Smartphone } from 'lucide-react';

const PhonePeStatementGuide = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const steps = [
    {
      title: "Open PhonePe App",
      image: "/imgs/phonepay1.jpg",
      instructions: [
        "Open PhonePe app from your home screen",
        "You'll see the main dashboard with various services",
        "Look for the 'History' option at the bottom navigation bar"
      ]
    },
    {
      title: "Navigate to History",
      image: "/imgs/phonepay2.jpg",
      instructions: [
        "Click on 'History' icon at the bottom of the screen",
        "You'll see your recent transactions listed",
        "Tap on 'My Statements' to proceed in the top-right corner"
      ]
    },
    {
      title: "Select Statement Range",
      image: "/imgs/phonepay3.jpg",
      instructions: [
        "Choose the time period for which you want to download your payment statement.",
        "Tap the 'Download' button to generate your statement"
      ]
    }
  ];

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  const goToStep = (index) => {
    setCurrentStep(index);
  };

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #f3e8ff, #e0e7ff, #f3e8ff)',
      padding: isMobile ? '16px' : '24px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    },
    wrapper: {
      maxWidth: '1400px',
      margin: '0 auto'
    },
    card: {
      backgroundColor: 'white',
      borderRadius: '16px',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      overflow: 'hidden'
    },
    header: {
      background: 'linear-gradient(to right, #7c3aed, #4f46e5)',
      color: 'white',
      padding: isMobile ? '24px' : '32px'
    },
    headerTitle: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '12px'
    },
    headerH1: {
      fontSize: isMobile ? '1.25rem' : '1.5rem',
      fontWeight: 'bold',
      margin: 0
    },
    headerP: {
      color: '#c4b5fd',
      fontSize: isMobile ? '0.875rem' : '1.125rem',
      margin: 0
    },
    progressSection: {
      backgroundColor: '#f9fafb',
      borderBottom: '1px solid #e5e7eb',
      padding: isMobile ? '16px 24px' : '20px 32px'
    },
    progressContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '8px'
    },
    progressStep: {
      display: 'flex',
      alignItems: 'center'
    },
    stepButton: {
      width: isMobile ? '32px' : '40px',
      height: isMobile ? '32px' : '40px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: '600',
      fontSize: isMobile ? '0.875rem' : '1rem',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    stepButtonActive: {
      backgroundColor: '#7c3aed',
      color: 'white',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
    },
    stepButtonCompleted: {
      backgroundColor: '#10b981',
      color: 'white'
    },
    stepButtonInactive: {
      backgroundColor: '#d1d5db',
      color: '#6b7280'
    },
    progressLine: {
      height: '4px',
      width: isMobile ? '48px' : '64px',
      margin: '0 8px',
      transition: 'all 0.3s ease'
    },
    progressLineCompleted: {
      backgroundColor: '#10b981'
    },
    progressLineIncomplete: {
      backgroundColor: '#d1d5db'
    },
    progressText: {
      fontSize: '0.875rem',
      color: '#6b7280',
      textAlign: 'center',
      margin: 0
    },
    mainContent: {
      padding: isMobile ? '24px' : '32px 48px'
    },
    contentGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: isMobile ? '24px' : '48px',
      alignItems: 'flex-start'
    },
    instructionsSection: {
      order: 1
    },
    titleSection: {
      marginBottom: isMobile ? '16px' : '24px'
    },
    stepTitle: {
      fontSize: isMobile ? '1.125rem' : '1.5rem',
      fontWeight: 'bold',
      color: '#1f2937',
      marginBottom: '8px',
      margin: '0 0 8px 0'
    },
    stepDescription: {
      color: '#6b7280',
      fontSize: isMobile ? '0.875rem' : '1rem',
      margin: 0
    },
    instructionsBox: {
      backgroundColor: '#eff6ff',
      borderRadius: '12px',
      padding: isMobile ? '16px' : '24px',
      borderLeft: '4px solid #3b82f6'
    },
    instructionsTitle: {
      fontWeight: '600',
      color: '#1e3a8a',
      marginBottom: '12px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      margin: '0 0 12px 0',
      fontSize: isMobile ? '0.875rem' : '1rem'
    },
    instructionsList: {
      margin: 0,
      padding: 0,
      listStyle: 'none'
    },
    instructionItem: {
      color: '#1e40af',
      display: 'flex',
      alignItems: 'flex-start',
      gap: '8px',
      marginBottom: '8px',
      fontSize: isMobile ? '0.875rem' : '1rem'
    },
    instructionBullet: {
      color: '#3b82f6',
      marginTop: '4px'
    },
    imageSection: {
      order: isMobile ? 2 : 2
    },
    imageContainer: {
      backgroundColor: '#f3f4f6',
      borderRadius: '12px',
      padding: isMobile ? '12px' : '16px'
    },
    imageWrapper: {
      backgroundColor: 'black',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
    },
    image: {
      width: '100%',
      height: isMobile ? '280px' : '320px',
      objectFit: 'contain'
    },
    navigation: {
      backgroundColor: '#f9fafb',
      padding: isMobile ? '16px 24px' : '20px 32px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    navButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: isMobile ? '8px 16px' : '12px 24px',
      borderRadius: '8px',
      fontWeight: '500',
      fontSize: isMobile ? '0.875rem' : '1rem',
      transition: 'all 0.3s ease',
      border: 'none',
      cursor: 'pointer'
    },
    navButtonActive: {
      backgroundColor: '#7c3aed',
      color: 'white',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
    },
    navButtonDisabled: {
      backgroundColor: '#d1d5db',
      color: '#9ca3af',
      cursor: 'not-allowed'
    },
    navButtonPrev: {
      backgroundColor: '#4b5563',
      color: 'white'
    },
    dotNavigation: {
      display: 'flex',
      gap: '8px'
    },
    dot: {
      width: isMobile ? '12px' : '16px',
      height: isMobile ? '12px' : '16px',
      borderRadius: '50%',
      transition: 'all 0.3s ease',
      border: 'none',
      cursor: 'pointer',
      padding: isMobile ? '0.2px' : '1px'
    },
    dotActive: {
      backgroundColor: '#7c3aed'
    },
    dotInactive: {
      backgroundColor: '#d1d5db'
    },
    tips: {
      backgroundColor: '#fffbeb',
      borderTop: '1px solid #fed7aa',
      padding: isMobile ? '16px 24px' : '20px 32px'
    },
    tipsTitle: {
      fontWeight: '600',
      color: '#92400e',
      marginBottom: '8px',
      margin: '0 0 8px 0',
      fontSize: isMobile ? '0.875rem' : '1rem',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    tipsGrid: {
      display: isMobile ? 'block' : 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: isMobile ? '4px' : '16px 32px',
      color: '#a16207',
      fontSize: '0.75rem'
    },
    tipItem: {
      marginBottom: isMobile ? '4px' : '4px'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <div style={styles.card}>
          {/* Header */}
          <div style={styles.header}>
            <div style={styles.headerTitle}>
              <Smartphone size={isMobile ? 24 : 32} />
              <h1 style={styles.headerH1}>PhonePe Statement Download Guide</h1>
            </div>
            <p style={styles.headerP}>
              Follow these simple steps to download your payment statements from PhonePe
            </p>
          </div>

          {/* Progress Indicator */}
          <div style={styles.progressSection}>
            <div style={styles.progressContainer}>
              {steps.map((_, index) => (
                <div key={index} style={styles.progressStep}>
                  <button
                    onClick={() => goToStep(index)}
                    style={{
                      ...styles.stepButton,
                      ...(index === currentStep ? styles.stepButtonActive :
                          index < currentStep ? styles.stepButtonCompleted :
                          styles.stepButtonInactive)
                    }}
                  >
                    {index + 1}
                  </button>
                  {index < steps.length - 1 && (
                    <div
                      style={{
                        ...styles.progressLine,
                        ...(index < currentStep ? styles.progressLineCompleted : styles.progressLineIncomplete)
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
            <p style={styles.progressText}>
              Step {currentStep + 1} of {steps.length}
            </p>
          </div>

          {/* Main Content */}
          <div style={styles.mainContent}>
            <div style={styles.contentGrid}>
              {/* Instructions */}
              <div style={styles.instructionsSection}>
                <div style={styles.titleSection}>
                  <h2 style={styles.stepTitle}>
                    {steps[currentStep].title}
                  </h2>
                  <p style={styles.stepDescription}>
                    {steps[currentStep].description}
                  </p>
                </div>

                <div style={styles.instructionsBox}>
                  <h3 style={styles.instructionsTitle}>
                    <History size={18} />
                    Instructions:
                  </h3>
                  <ul style={styles.instructionsList}>
                    {steps[currentStep].instructions.map((instruction, index) => (
                      <li key={index} style={styles.instructionItem}>
                        <span style={styles.instructionBullet}>•</span>
                        <span>{instruction}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Screenshot */}
              <div style={styles.imageSection}>
                <div style={styles.imageContainer}>
                  <div style={styles.imageWrapper}>
                    <img
                      src={steps[currentStep].image}
                      alt={`Step ${currentStep + 1}: ${steps[currentStep].title}`}
                      style={styles.image}
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjUwMCIgZmlsbD0iIzMzMzMzMyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0Ij5TY3JlZW5zaG90IFVuYXZhaWxhYmxlPC90ZXh0Pjwvc3ZnPg==';
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div style={styles.navigation}>
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              style={{
                ...styles.navButton,
                ...(currentStep === 0 ? styles.navButtonDisabled : styles.navButtonPrev)
              }}
            >
              <ChevronLeft size={16} />
              Previous
            </button>

            {isMobile ? <div></div> : <div style={styles.dotNavigation}>
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToStep(index)}
                  style={{
                    ...styles.dot,
                    ...(index === currentStep ? styles.dotActive : styles.dotInactive)
                  }}
                />
              ))}
            </div>}

            <button
              onClick={nextStep}
              disabled={currentStep === steps.length - 1}
              style={{
                ...styles.navButton,
                ...(currentStep === steps.length - 1 ? styles.navButtonDisabled : styles.navButtonActive)
              }}
            >
              Next
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Tips Section */}
          <div style={styles.tips}>
            <h3 style={styles.tipsTitle}>
              💡 Pro Tips
            </h3>
            <div style={styles.tipsGrid}>
              <div style={styles.tipItem}>• Statements are generated in PDF format</div>
              <div style={styles.tipItem}>• Download multiple statements for different periods</div>
              <div style={styles.tipItem}>• Keep statements safe for tax purposes</div>
              <div style={styles.tipItem}>• Download may take a few seconds</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhonePeStatementGuide;