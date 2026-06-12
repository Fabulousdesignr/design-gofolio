import React from 'react';
import '../editorial.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

// Editorial Components
import EditorialNav from '../components/editorial/EditorialNav';
import EditorialHero from '../components/editorial/EditorialHero';
import EditorialProjectCard from '../components/editorial/EditorialProjectCard';
import EditorialProductGrid from '../components/editorial/EditorialProductGrid';
import EditorialProcess from '../components/editorial/EditorialProcess';
import EditorialExperience from '../components/editorial/EditorialExperience';
import EditorialAbout from '../components/editorial/EditorialAbout';
import EditorialFooter from '../components/editorial/EditorialFooter';

import { projects } from '../data/projects';
import { experiments } from '../data/experiments';

export default function HomeEditorial() {
  useScrollReveal();

  return (
    <div className="editorial-theme">
      <EditorialNav />
      <main>
        <EditorialHero />
        <EditorialProjectCard projects={projects} />
        <EditorialProductGrid experiments={experiments} />
        <EditorialProcess />
        <EditorialExperience />
        <EditorialAbout />
      </main>
      <EditorialFooter />
    </div>
  );
}
