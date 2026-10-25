
.demoSection {
  padding: 75px 24px 100px;
  background: #fff;
  color: #080808;
  text-align: center;
  overflow: hidden;
}

.demoEyebrow {
  margin: 0 0 18px;
  font-size: 20px;
  font-weight: 600;
}

.demoHeading {
  margin: 0 0 70px;
  font-size: clamp(28px, 3vw, 42px);
  font-weight: 750;
}

.demoCarousel {
  position: relative;
  width: min(100%, 1200px);
  margin: 0 auto;
}

.demoTrack {
  position: relative;
  height: 410px;
  overflow: visible;
}

.demoSlide {
  position: absolute;
  top: 0;
  left: 50%;
  width: min(460px, 70vw);
  min-height: 320px;
  border-radius: 14px;
  overflow: hidden;
  background: #e4ddff;
  text-align: left;
  transform-origin: center center;
  transition:
    transform 550ms cubic-bezier(0.22, 1, 0.36, 1),
    opacity 400ms ease;
  box-shadow: 0 12px 35px rgba(81, 40, 201, 0.12);
}

.demoImageWrap {
  position: relative;
  height: 225px;
  overflow: hidden;
  border: 10px solid #9580ff;
  border-radius: 14px 14px 0 0;
  background: #f7f5ff;
}

.demoImageWrap img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.demoPlay {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 56px;
  height: 56px;
  border: 0;
  border-radius: 50%;
  background: #6045ff;
  color: white;
  cursor: pointer;
  font-size: 22px;
  transform: translate(-50%, -50%);
}

.demoCardText {
  padding: 20px;
}

.demoCardText p {
  margin: 0;
  font-size: 19px;
  line-height: 1.5;
}

.demoCardText strong {
  color: #6045ff;
}

.demoArrow {
  position: absolute;
  top: 43%;
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 60px;
  padding: 0;
  border: none;
  background: transparent;
  color: #999;
  font-size: 48px;
  cursor: pointer;
  transform: translateY(-50%);
  transition: color 200ms ease;
}

.demoArrow:hover {
  color: #6045ff;
}

.demoArrowLeft {
  left: 0;
}

.demoArrowRight {
  right: 0;
}

@media (max-width: 760px) {
  .demoSection {
    padding: 50px 12px 70px;
  }

  .demoHeading {
    margin-bottom: 45px;
  }

  .demoTrack {
    height: 340px;
  }

  .demoSlide {
    width: min(76vw, 400px);
  }

  .demoArrowLeft {
    left: 0;
  }

  .demoArrowRight {
    right: 0;
  }

  .demoImageWrap {
    height: 180px;
  }

  .demoCardText p {
    font-size: 16px;
  }
}
