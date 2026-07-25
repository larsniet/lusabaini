/**
 * Seed Portuguese placeholder content into the consultancy dataset.
 *
 * Usage (from apps/studio-sanity):
 *   SANITY_AUTH_TOKEN=... pnpm seed:consultancy
 *
 * Token needs write access to project 0hp0ah4w / dataset consultancy.
 */
import {createClient} from '@sanity/client'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || '0hp0ah4w'
const token = process.env.SANITY_AUTH_TOKEN || process.env.SANITY_API_WRITE_TOKEN

if (!token) {
  console.error('Missing SANITY_AUTH_TOKEN (or SANITY_API_WRITE_TOKEN) with write access.')
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset: 'consultancy',
  apiVersion: '2025-01-01',
  token,
  useCdn: false,
})

const docs = [
  {
    _id: 'brandingSection',
    _type: 'brandingSection',
    brandColorHex: '#f9f3eb',
  },
  {
    _id: 'navigationSection',
    _type: 'navigationSection',
    mainNavigation: [
      {_type: 'navLink', _key: 'home', href: '/', label: 'Início'},
      {_type: 'navLink', _key: 'servicos', href: '/servicos', label: 'Serviços'},
      {_type: 'navLink', _key: 'sobre', href: '/sobre', label: 'Sobre'},
    ],
    ctaButton: {label: 'Agendar conversa', href: '/contato'},
  },
  {
    _id: 'footerSection',
    _type: 'footerSection',
    brandLabel: 'Luiza Sabaini',
    headlineStart: 'Sua nova vida na',
    headlineEmphasis: 'Holanda',
    headlineEnd: ' começa com orientação clara.',
    description:
      'Consultoria prática para brasileiros que querem se mudar ou se estabelecer na Holanda.',
  },
  {
    _id: 'heroSection',
    _type: 'heroSection',
    seoTitle: 'Consultoria para morar na Holanda',
    seoDescription:
      'Orientação prática de Luiza Sabaini Costa para brasileiros que querem se mudar ou viver na Holanda.',
    badgeLabel: 'Consultoria Holanda',
    headlineStart: 'Morar na Holanda com',
    headlineEmphasis: 'clareza',
    headlineEnd: ' e confiança',
    description:
      'Eu ajudo brasileiros a planejar a mudança, entender a burocracia e se adaptar à vida na Holanda — com orientação prática, humana e sob medida.',
    primaryCta: {label: 'Agendar conversa', href: '/contato'},
    secondaryCta: {label: 'Ver serviços', href: '/servicos'},
  },
  {
    _id: 'servicesSection',
    _type: 'servicesSection',
    seoTitle: 'Serviços',
    seoDescription:
      'Consultoria para visto, moradia, burocracia e adaptação cultural na Holanda.',
    headline: 'Como posso te ajudar',
    intro:
      'Pacotes de orientação para cada etapa da sua jornada — da decisão de mudar até a vida estabelecida na Holanda.',
    services: [
      {
        _type: 'service',
        _key: 'visa',
        title: 'Visto e imigração',
        description:
          'Entenda as opções de visto para a Holanda (trabalho, estudos, parceiro, DAFT e mais), documentos necessários e o passo a passo do processo junto à IND.',
        icon: 'passport',
      },
      {
        _type: 'service',
        _key: 'registration',
        title: 'Registro e BSN',
        description:
          'Registro na gemeente, obtenção do BSN, DigiD e os primeiros documentos que destravam toda a sua vida na Holanda.',
        icon: 'map',
      },
      {
        _type: 'service',
        _key: 'housing',
        title: 'Moradia',
        description:
          'Como buscar imóvel, o que observar em contratos, regiões e armadilhas comuns ao alugar na Holanda.',
        icon: 'home',
      },
      {
        _type: 'service',
        _key: 'bureaucracy',
        title: 'Burocracia do dia a dia',
        description:
          'Conta bancária, seguro de saúde (zorgverzekering), impostos e tudo que você precisa resolver nos primeiros meses.',
        icon: 'file',
      },
      {
        _type: 'service',
        _key: 'work',
        title: 'Trabalho e carreira',
        description:
          'Como adaptar currículo e LinkedIn ao mercado holandês, onde buscar vagas e o que esperar de processos seletivos na Holanda.',
        icon: 'briefcase',
      },
      {
        _type: 'service',
        _key: 'culture',
        title: 'Orientação cultural',
        description:
          'Como funciona a vida holandesa — trabalho, etiquetas sociais, clima, bicicleta, redes de apoio e expectativas realistas para a adaptação.',
        icon: 'users',
      },
    ],
  },
  {
    _id: 'aboutSection',
    _type: 'aboutSection',
    seoTitle: 'Sobre',
    seoDescription:
      'Conheça Luiza Sabaini Costa: 6 anos vivendo na Holanda, múltiplas mudanças e carreiras — e a experiência que ela usa para guiar brasileiros na mesma jornada.',
    badgeLabel: 'Sobre mim',
    headlineStart: 'Eu vivi cada etapa dessa',
    headlineEmphasis: 'jornada',
    headlineEnd: ' na pele',
    intro:
      'Sou a Luiza Sabaini Costa. Há 6 anos troquei o Brasil pela Holanda — cheguei sem conhecer ninguém, com duas malas e muitas dúvidas. Hoje ajudo brasileiros a fazerem essa mesma transição com menos ansiedade e muito mais preparo.',
    stats: [
      {_type: 'stat', _key: 's1', value: '6+', label: 'anos vivendo na Holanda'},
      {_type: 'stat', _key: 's2', value: '3', label: 'cidades holandesas como casa'},
      {_type: 'stat', _key: 's3', value: '5', label: 'empregos no mercado holandês'},
      {_type: 'stat', _key: 's4', value: '100%', label: 'na prática, sem teoria genérica'},
    ],
    storySections: [
      {
        _type: 'storyBlock',
        _key: 'b1',
        title: 'Como tudo começou',
        body: 'Em 2019 eu embarquei para a Holanda com um visto, duas malas e um contrato temporário. Nos primeiros meses eu errei praticamente tudo que dava para errar: aluguei um quarto caro demais, demorei para entender o seguro de saúde e perdi prazos de registro na gemeente que me custaram tempo e dinheiro.\n\nForam exatamente esses tropeços que viraram o meu maior ativo. Cada erro virou um checklist, cada burocracia decifrada virou um mapa — e foi assim que amigos e amigos de amigos começaram a me procurar antes de se mudarem.',
      },
      {
        _type: 'storyBlock',
        _key: 'b2',
        title: 'Trabalho e carreira na Holanda',
        body: 'Nesses 6 anos eu passei por cinco empregos diferentes: comecei no atendimento de uma rede de hotéis, passei por logística, trabalhei em uma startup de tecnologia, atuei com marketing digital e hoje divido meu tempo entre criação de conteúdo e consultoria.\n\nEssa variedade me deu algo que nenhum manual ensina: eu sei como funcionam contratos holandeses, período de experiência, negociação salarial, impostos sobre o salário e o que recrutadores na Holanda realmente olham no currículo de um brasileiro.',
      },
      {
        _type: 'storyBlock',
        _key: 'b3',
        title: 'Por que consultoria',
        body: 'Depois de ajudar dezenas de pessoas informalmente, percebi um padrão: a maioria não precisava de mais informação — a internet está cheia dela. Precisava de alguém que já viveu o processo para filtrar o que importa, montar um plano realista e acompanhar de perto.\n\nÉ isso que eu faço. Sem promessas milagrosas, sem "fórmula pronta": um plano honesto, adaptado ao seu perfil, com alguém que já esteve exatamente onde você está agora.',
      },
    ],
    journey: [
      {
        _type: 'milestone',
        _key: 'm1',
        period: '2019',
        title: 'A mudança para a Holanda',
        description:
          'Saí do Brasil com um contrato temporário em hotelaria e aprendi na prática como funciona registro, moradia e os primeiros meses no exterior.',
      },
      {
        _type: 'milestone',
        _key: 'm2',
        period: '2020 — 2021',
        title: 'Logística e primeiro contrato fixo',
        description:
          'Migrei para o setor de logística, consegui meu primeiro contrato permanente e passei pelo processo completo de renovação de visto.',
      },
      {
        _type: 'milestone',
        _key: 'm3',
        period: '2022 — 2023',
        title: 'Startup de tecnologia e marketing',
        description:
          'Trabalhei em uma scale-up internacional e depois em marketing digital — dois processos seletivos completos em inglês, com negociação salarial e relocação interna.',
      },
      {
        _type: 'milestone',
        _key: 'm4',
        period: '2024',
        title: 'Criação de conteúdo',
        description:
          'Comecei a compartilhar a vida na Holanda nas redes sociais e a responder, todos os dias, dúvidas de brasileiros querendo se mudar.',
      },
      {
        _type: 'milestone',
        _key: 'm5',
        period: 'Hoje',
        title: 'Consultoria Holanda',
        description:
          'Transformei 6 anos de experiência vivida em um serviço estruturado de consultoria para quem quer morar na Holanda.',
      },
    ],
    teaser:
      '6 anos de Holanda, 3 cidades, 5 empregos — orientação de quem viveu cada etapa na pele.',
  },
  {
    _id: 'processSection',
    _type: 'processSection',
    headline: 'Como funciona',
    intro: 'Um caminho simples, do primeiro contato até o acompanhamento.',
    steps: [
      {
        _type: 'step',
        _key: '1',
        title: 'Conversa inicial',
        description:
          'Você me conta onde está na jornada (planejando, com visto, ou já na Holanda) e o que precisa resolver.',
      },
      {
        _type: 'step',
        _key: '2',
        title: 'Plano sob medida',
        description:
          'Montamos um plano com prioridades, prazos e próximos passos claros para a sua situação.',
      },
      {
        _type: 'step',
        _key: '3',
        title: 'Acompanhamento',
        description:
          'Sessões e suporte contínuo enquanto você avança — com ajustes conforme a realidade muda.',
      },
    ],
  },
  {
    _id: 'faqSection',
    _type: 'faqSection',
    headline: 'Perguntas frequentes',
    items: [
      {
        _type: 'faqItem',
        _key: '1',
        question: 'Você oferece assessoria jurídica ou de imigração oficial?',
        answer:
          'Não. Eu ofereço orientação prática com base na minha experiência e no acompanhamento de clientes. Para trâmites oficiais, indico profissionais licenciados quando necessário.',
      },
      {
        _type: 'faqItem',
        _key: '2',
        question: 'Você atende quem quer morar em outros países?',
        answer:
          'Minha especialidade é a Holanda, onde vivo há 6 anos. Toda a consultoria — visto, registro, BSN, moradia, banco e seguro de saúde — é focada na realidade holandesa, e é aí que eu consigo gerar mais valor.',
      },
      {
        _type: 'faqItem',
        _key: '3',
        question: 'A consultoria é só para quem ainda está no Brasil?',
        answer:
          'Não. Também ajudo quem já vive na Holanda e precisa se organizar com burocracia, moradia, trabalho ou adaptação.',
      },
      {
        _type: 'faqItem',
        _key: '4',
        question: 'As sessões são online?',
        answer:
          'Sim. As conversas acontecem online, em português, com horário flexível considerando o fuso Brasil–Holanda.',
      },
    ],
  },
  {
    _id: 'contactPage',
    _type: 'contactPage',
    seoTitle: 'Contato',
    seoDescription:
      'Entre em contato com Luiza Sabaini Costa para consultoria sobre morar na Holanda.',
    headline: 'Vamos conversar sobre a sua mudança',
    intro:
      'Conte um pouco sobre o seu momento — se ainda está planejando, se já tem visto, ou se já mora na Holanda e precisa de orientação. Respondo em até 2 dias úteis.',
    supportingText:
      'Consultoria para visto e imigração, registro e BSN, moradia, burocracia (banco, seguro de saúde) e adaptação cultural.',
  },
  {
    _id: 'testimonial-1',
    _type: 'testimonial',
    name: 'Camila R.',
    role: 'Mudou para Utrecht em 2024',
    quote:
      'A Luiza me ajudou a organizar o registro, o seguro e a busca por moradia. Cheguei bem mais preparada do que eu imaginava.',
    order: 1,
  },
  {
    _id: 'testimonial-2',
    _type: 'testimonial',
    name: 'Pedro e Ana',
    role: 'Casal em Roterdã',
    quote:
      'Estávamos perdidos com visto e moradia. As sessões foram diretas e nos deram um plano realista para decidir e executar a mudança.',
    order: 2,
  },
  {
    _id: 'testimonial-3',
    _type: 'testimonial',
    name: 'Juliana M.',
    role: 'Já vivendo em Amsterdã',
    quote:
      'Mesmo depois de mudada, eu ainda me perdia na burocracia holandesa. A orientação da Luiza destravou várias coisas no meu dia a dia.',
    order: 3,
  },
]

async function main() {
  const tx = client.transaction()
  for (const doc of docs) {
    tx.createOrReplace(doc)
  }
  await tx.commit()
  console.log(`Seeded ${docs.length} documents into dataset "consultancy".`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
