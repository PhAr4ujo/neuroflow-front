import { createI18n } from 'vue-i18n'

export type Locale = 'en' | 'ja' | 'pt-BR' | 'es'

export const supportedLocales: Array<{ code: Locale; label: string }> = [
  { code: 'en', label: 'EN' },
  { code: 'ja', label: 'JP' },
  { code: 'pt-BR', label: 'PT-BR' },
  { code: 'es', label: 'ES' },
]

const STORAGE_KEY = 'neuroflow-locale'

export const messages = {
  en: {
    language: {
      label: 'Language',
    },
    nav: {
      label: 'Main',
      modes: 'Modes',
      privacy: 'Privacy',
      howItWorks: 'How it works',
    },
    hero: {
      tags: {
        openSource: 'Open source',
        browserOnly: 'Runs in browser',
        noTracking: 'No tracking',
      },
      copy: 'Procedural functional music for focus, relaxation, and sleep. An open-source alternative to Brain.fm, with no subscription, no tracking, and no required servers.',
      start: 'Start now',
      engine: 'View the engine',
    },
    player: {
      preview: 'NeuroFlow player preview',
      sessionActive: 'Active session',
      pause: 'Pause preview',
      play: 'Play preview',
      selectMode: 'Select mode',
    },
    modes: {
      focus: {
        label: 'Focus',
        title: 'Deep focus',
        subtitle: 'Discreet beta pulses for distraction-free work blocks.',
        description:
          'Binaural beats and isochronic rhythms calibrated to keep attention steady while the procedural synthesizer creates continuous variation.',
      },
      relax: {
        label: 'Relax',
        title: 'Real relaxation',
        subtitle: 'Theta textures to slow down mental noise.',
        description:
          'Ambient layers, filtered noise, and slow cycles help the body leave alert mode without depending on external streaming.',
      },
      sleep: {
        label: 'Sleep',
        title: 'Real sleep',
        subtitle: 'Delta waves with automatic fade-out for falling asleep.',
        description:
          'Long sessions gradually reduce intensity and stop by themselves, keeping everything local in the browser and away from tracking.',
      },
    },
    modesSection: {
      eyebrow: 'Three mental states',
      title: 'Choose the rhythm for your nervous system.',
      copy: 'Each mode combines a neural band, volume envelopes, textures, and procedural variation to avoid tiring loops.',
    },
    privacy: {
      eyebrow: 'Privacy by design',
      title: 'Functional without becoming one more account to manage.',
      pillars: {
        subscription: {
          title: 'No subscription',
          text: 'The app is designed to run locally, with open code and no monthly paywall.',
        },
        tracking: {
          title: 'No tracking',
          text: 'Sessions, preferences, and history can stay on your device, with no mandatory analytics.',
        },
        server: {
          title: 'No required server',
          text: 'Sound generation happens in the browser using procedural synthesis and versioned presets.',
        },
      },
    },
    process: {
      eyebrow: 'How it works',
      title: 'Procedural synthesis, not an infinite playlist.',
      engineLocal: 'Local engine',
      oscillators: 'Oscillators',
      filters: 'Filters',
      envelopes: 'Envelopes',
      steps: [
        'Choose focus, relaxation, or sleep.',
        'The engine builds layers, pulses, and envelopes in real time.',
        'You adjust duration and intensity without sending data to third parties.',
      ],
    },
    openSource: {
      eyebrow: 'Open source',
      title: 'An alternative you can audit, modify, and host wherever you want.',
      repo: 'View repository',
    },
  },
  ja: {
    language: {
      label: '言語',
    },
    nav: {
      label: 'メイン',
      modes: 'モード',
      privacy: 'プライバシー',
      howItWorks: '仕組み',
    },
    hero: {
      tags: {
        openSource: 'オープンソース',
        browserOnly: 'ブラウザで動作',
        noTracking: '追跡なし',
      },
      copy: '集中、リラックス、睡眠のためのプロシージャルな機能音楽。Brain.fm に代わるオープンソースの選択肢で、サブスクも追跡も必須サーバーもありません。',
      start: '今すぐ始める',
      engine: 'エンジンを見る',
    },
    player: {
      preview: 'NeuroFlow プレイヤープレビュー',
      sessionActive: 'アクティブなセッション',
      pause: 'プレビューを一時停止',
      play: 'プレビューを再生',
      selectMode: 'モードを選択',
    },
    modes: {
      focus: {
        label: '集中',
        title: '深い集中',
        subtitle: '作業ブロックを乱さない控えめなベータパルス。',
        description:
          'バイノーラルビートとアイソクロニックリズムで注意を安定させ、プロシージャルシンセが継続的な変化を生み出します。',
      },
      relax: {
        label: 'リラックス',
        title: '本当のリラックス',
        subtitle: '思考のノイズをゆるめるシータ系テクスチャ。',
        description:
          'アンビエントレイヤー、フィルターされたノイズ、ゆっくりした周期で、外部ストリーミングに頼らず警戒状態をほどきます。',
      },
      sleep: {
        label: '睡眠',
        title: '深い睡眠',
        subtitle: '眠りに入るための自動フェード付きデルタ波。',
        description:
          '長めのセッションは少しずつ強度を下げて自動で停止し、すべてをブラウザ内に保ちます。',
      },
    },
    modesSection: {
      eyebrow: '3つのメンタル状態',
      title: '神経系に合うリズムを選ぶ。',
      copy: '各モードは神経帯域、音量エンベロープ、テクスチャ、プロシージャルな変化を組み合わせ、疲れるループを避けます。',
    },
    privacy: {
      eyebrow: 'プライバシー設計',
      title: '管理するアカウントを増やさない機能音楽。',
      pillars: {
        subscription: {
          title: 'サブスクなし',
          text: 'ローカルで動くことを前提にしたオープンコードのアプリで、月額課金の壁はありません。',
        },
        tracking: {
          title: '追跡なし',
          text: 'セッション、設定、履歴はデバイス内に置くことができ、必須の分析はありません。',
        },
        server: {
          title: '必須サーバーなし',
          text: '音の生成はブラウザ内で行われ、プロシージャルシンセとバージョン管理されたプリセットを使います。',
        },
      },
    },
    process: {
      eyebrow: '仕組み',
      title: '無限プレイリストではなく、プロシージャル合成。',
      engineLocal: 'ローカルエンジン',
      oscillators: 'オシレーター',
      filters: 'フィルター',
      envelopes: 'エンベロープ',
      steps: [
        '集中、リラックス、睡眠を選びます。',
        'エンジンがレイヤー、パルス、エンベロープをリアルタイムに構築します。',
        '第三者へデータを送らずに、時間と強度を調整できます。',
      ],
    },
    openSource: {
      eyebrow: 'オープンソース',
      title: '監査、変更、好きな場所でのホストができる代替案。',
      repo: 'リポジトリを見る',
    },
  },
  'pt-BR': {
    language: {
      label: 'Idioma',
    },
    nav: {
      label: 'Principal',
      modes: 'Modos',
      privacy: 'Privacidade',
      howItWorks: 'Como funciona',
    },
    hero: {
      tags: {
        openSource: 'Open source',
        browserOnly: 'Tudo no browser',
        noTracking: 'Sem tracking',
      },
      copy: 'Música funcional procedural para foco, relaxamento e sono. Uma alternativa open source ao Brain.fm, sem assinatura, sem rastreamento e sem servidores obrigatórios.',
      start: 'Começar agora',
      engine: 'Ver a engine',
    },
    player: {
      preview: 'Prévia do player NeuroFlow',
      sessionActive: 'Sessão ativa',
      pause: 'Pausar prévia',
      play: 'Tocar prévia',
      selectMode: 'Selecionar modo',
    },
    modes: {
      focus: {
        label: 'Foco',
        title: 'Foco profundo',
        subtitle: 'Pulsos beta discretos para blocos de trabalho sem distração.',
        description:
          'Batidas binaurais e ritmos isocrônicos calibrados para manter atenção estável enquanto o sintetizador procedural cria variações contínuas.',
      },
      relax: {
        label: 'Relaxar',
        title: 'Relaxamento real',
        subtitle: 'Texturas theta para desacelerar o ruído mental.',
        description:
          'Camadas ambientes, ruído filtrado e ciclos lentos ajudam o corpo a sair do estado de alerta sem depender de streaming externo.',
      },
      sleep: {
        label: 'Sono',
        title: 'Sono de verdade',
        subtitle: 'Ondas delta com fade automático para adormecer.',
        description:
          'Sessões longas reduzem intensidade aos poucos e encerram sozinhas, mantendo tudo local no browser e longe de rastreamento.',
      },
    },
    modesSection: {
      eyebrow: 'Três estados mentais',
      title: 'Escolha o ritmo do seu sistema nervoso.',
      copy: 'Cada modo combina uma faixa neural, envelopes de volume, texturas e variação procedural para evitar loops cansativos.',
    },
    privacy: {
      eyebrow: 'Privacidade por design',
      title: 'Funcional sem virar mais uma conta para gerenciar.',
      pillars: {
        subscription: {
          title: 'Sem assinatura',
          text: 'O app nasce para rodar localmente, com código aberto e sem bloqueio por mensalidade.',
        },
        tracking: {
          title: 'Sem rastreamento',
          text: 'Sessões, preferências e histórico podem ficar no seu dispositivo, sem analytics obrigatórios.',
        },
        server: {
          title: 'Sem servidor obrigatório',
          text: 'A geração sonora acontece no browser, usando síntese procedural e presets versionados.',
        },
      },
    },
    process: {
      eyebrow: 'Como funciona',
      title: 'Síntese procedural, não playlist infinita.',
      engineLocal: 'Engine local',
      oscillators: 'Osciladores',
      filters: 'Filtros',
      envelopes: 'Envelopes',
      steps: [
        'Escolha foco, relaxamento ou sono.',
        'A engine monta camadas, pulsos e envelopes em tempo real.',
        'Você ajusta duração e intensidade sem enviar dados para terceiros.',
      ],
    },
    openSource: {
      eyebrow: 'Código aberto',
      title: 'Uma alternativa que você pode auditar, modificar e hospedar onde quiser.',
      repo: 'Ver repositório',
    },
  },
  es: {
    language: {
      label: 'Idioma',
    },
    nav: {
      label: 'Principal',
      modes: 'Modos',
      privacy: 'Privacidad',
      howItWorks: 'Cómo funciona',
    },
    hero: {
      tags: {
        openSource: 'Open source',
        browserOnly: 'Todo en el navegador',
        noTracking: 'Sin tracking',
      },
      copy: 'Música funcional procedural para foco, relajación y sueño. Una alternativa open source a Brain.fm, sin suscripción, sin rastreo y sin servidores obligatorios.',
      start: 'Empezar ahora',
      engine: 'Ver la engine',
    },
    player: {
      preview: 'Vista previa del reproductor NeuroFlow',
      sessionActive: 'Sesión activa',
      pause: 'Pausar vista previa',
      play: 'Reproducir vista previa',
      selectMode: 'Seleccionar modo',
    },
    modes: {
      focus: {
        label: 'Foco',
        title: 'Foco profundo',
        subtitle: 'Pulsos beta discretos para bloques de trabajo sin distracciones.',
        description:
          'Batidos binaurales y ritmos isocrónicos calibrados para mantener la atención estable mientras el sintetizador procedural crea variación continua.',
      },
      relax: {
        label: 'Relajar',
        title: 'Relajación real',
        subtitle: 'Texturas theta para desacelerar el ruido mental.',
        description:
          'Capas ambientales, ruido filtrado y ciclos lentos ayudan al cuerpo a salir del estado de alerta sin depender de streaming externo.',
      },
      sleep: {
        label: 'Sueño',
        title: 'Sueño real',
        subtitle: 'Ondas delta con fade automático para dormirte.',
        description:
          'Las sesiones largas reducen la intensidad poco a poco y se detienen solas, manteniendo todo local en el navegador y lejos del rastreo.',
      },
    },
    modesSection: {
      eyebrow: 'Tres estados mentales',
      title: 'Elige el ritmo de tu sistema nervioso.',
      copy: 'Cada modo combina una banda neural, envolventes de volumen, texturas y variación procedural para evitar loops cansadores.',
    },
    privacy: {
      eyebrow: 'Privacidad por diseño',
      title: 'Funcional sin convertirse en otra cuenta que administrar.',
      pillars: {
        subscription: {
          title: 'Sin suscripción',
          text: 'La app nace para ejecutarse localmente, con código abierto y sin bloqueo por mensualidad.',
        },
        tracking: {
          title: 'Sin rastreo',
          text: 'Sesiones, preferencias e historial pueden quedarse en tu dispositivo, sin analytics obligatorios.',
        },
        server: {
          title: 'Sin servidor obligatorio',
          text: 'La generación sonora ocurre en el navegador usando síntesis procedural y presets versionados.',
        },
      },
    },
    process: {
      eyebrow: 'Cómo funciona',
      title: 'Síntesis procedural, no una playlist infinita.',
      engineLocal: 'Engine local',
      oscillators: 'Osciladores',
      filters: 'Filtros',
      envelopes: 'Envolventes',
      steps: [
        'Elige foco, relajación o sueño.',
        'La engine monta capas, pulsos y envolventes en tiempo real.',
        'Ajustas duración e intensidad sin enviar datos a terceros.',
      ],
    },
    openSource: {
      eyebrow: 'Código abierto',
      title: 'Una alternativa que puedes auditar, modificar y alojar donde quieras.',
      repo: 'Ver repositorio',
    },
  },
} as const

const isSupportedLocale = (value: string | null | undefined): value is Locale =>
  supportedLocales.some((locale) => locale.code === value)

const normalizeLocale = (value: string | null | undefined): Locale | undefined => {
  const normalized = value?.toLowerCase()

  if (!normalized) return undefined
  if (normalized.startsWith('pt')) return 'pt-BR'
  if (normalized.startsWith('ja') || normalized.startsWith('jp')) return 'ja'
  if (normalized.startsWith('es')) return 'es'
  if (normalized.startsWith('en')) return 'en'

  return undefined
}

const storedLocale =
  typeof localStorage === 'undefined' ? undefined : localStorage.getItem(STORAGE_KEY)
const browserLocale = typeof navigator === 'undefined' ? undefined : navigator.language

export const initialLocale =
  normalizeLocale(storedLocale) ?? normalizeLocale(browserLocale) ?? 'pt-BR'

export const persistLocale = (locale: Locale) => {
  if (!isSupportedLocale(locale) || typeof localStorage === 'undefined') return

  localStorage.setItem(STORAGE_KEY, locale)
}

export const i18n = createI18n({
  legacy: false,
  locale: initialLocale,
  fallbackLocale: 'en',
  messages,
})
