const thirdSection = document.querySelector('.sub-third-section');

const FeatureArray = [
  {
    imageLink: './Images/Dr.-Amadou-Alpha-Sall.jpg',
    Header: 'Dr. Amadou-Sall',
    introInfo: 'Dr Amadou A Sall is the CEO of Institut Pasteur de Dakar in Senegal.',
    detail: 'Director of the WHO Collaborating Center for Arboviruses and Viral Hemorrhagic Fever. He has been chairman of the Global Outbreak Alert and Response Network and a member of the Coalition for Epidemic Preparedness and Innovation (CEPI) Scientific Advisory Board.',
  },
  {
    imageLink: './Images/Dr.-Ernest-Darkoh-768x1152.jpg',
    Header: 'Dr.Ernest-Darkoh',
    introInfo: 'Expert on health systems strengthening and large-scale program implementation.',
    detail: ' He is on the Board of the Schwab Foundation for Social Entrepreneurship and has been recognized by New African Magazine as one of the 100 most influential Africans and named one of eighteen “Global Health Heroes” by TIME Magazine.',
  },
  {
    imageLink: './Images/Dr.-Yvonne-Mburu.jpg',
    Header: 'Dr.Yvonne-Mburu',
    introInfo: 'Founder of Nexakili, a growing network of African health professionals and scientists.',
    detail: 'Her academic research at the Curie Institute in Paris and at the University of Pittsburgh, PA originally focused on the immunology and immunotherapy of cancer. Her work also spans health systems and policies, with a key focus on integrating breakthrough technologies to accelerate the pace of innovative medicine especially in Africa.',
  },
  {
    imageLink: './Images/Professor-Tom-Kariuki-1532x1536.jpg',
    Header: 'Professor-Tom-Kariuki',
    introInfo: 'Prof Thomas Kariuki is Executive Director of the Science for Africa (SFA) Foundation.',
    detail: 'Dr Kariuki previously served as the Director of Programmes for the Alliance for Accelerating Excellence in Science in Africa (AESA) and Director of a Biomedical facility, the Institute of Primate Research / National Museums of Kenya where he established his infectious immunology research group.',
  },
  {
    imageLink: './Images/Professor-Helen-Rees-.jpg',
    Header: 'Professor-Helen-Rees',
    introInfo: 'Professor Helen Rees is the Founder and Executive Director of Wits RHI, the largest research Institute at Wits University.',
    detail: 'Professor Rees chairs the Board of the South African Health Products Regulatory Authority and also Chairs the World Health Organisation’s AFRO Region Immunization Technical Advisory Group. Also a member of WHO’s Scientific and Technical Advisory Group on Infectious Hazards. ',
  },
  {
    imageLink: './Images/Dr.-Vera-Songwe..jpg',
    Header: 'Dr.-Yvonne-Mburu',
    introInfo: 'Dr. Vera Songwe is the Under-Secretary-General of the United Nations and Executive Secretary of the Economic Commission for Africa (ECA).',
    detail: 'Upon her appointment, she became the first woman to lead the institution in its 60-year history. She was listed as one of Africa’s 50 most powerful women by Forbes in 2020 and named as one of the ‘100 Most Influential Africans’ by Jeune Afrique in 2019. In 2017.',
  },
];

thirdSection.innerHTML = '';
FeatureArray.map((speaker) => {
  thirdSection.innerHTML = `${thirdSection.innerHTML}
   <div class= "speaker-detail"> 
       <div class="spkr">
       <div id="speaker-img">
          <img src="${speaker.imageLink}" alt="speaker img"/>
       </div>

          </div>
          <div class="speakers">
        <h3>${speaker.Header}</h3>
        <small>${speaker.introInfo}</small>
        <hr>
        <p>${speaker.detail}</p>
       </div> 
    <div>`;
  return (speaker);
});
