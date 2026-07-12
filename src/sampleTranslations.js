// Japanese translations for the built-in sample datasets shown in the
// "Try our data samples" panel (see DataSamples.js). Keyed by the sample's
// `url` (stable). `name` is the dataset title and `category` is the chart-type
// label; both are rendered on the sample card. Applied at the display layer.

const sampleText = {
  ja: {
    './sample-datasets/Alluvial diagram - Hate crimes in New York.tsv': {
      name: 'ニューヨークのヘイトクライム',
      category: 'アルビアルダイアグラム',
    },
    './sample-datasets/Arc diagrams - Lannister vs Starck relationships.tsv': {
      name: 'ラニスター家とスターク家の関係',
      category: 'アーク図',
    },
    './sample-datasets/Horizon Graph - EU Index of consumer prices.tsv': {
      name: 'EU消費者物価指数',
      category: 'ホライズングラフ',
    },
    './sample-datasets/Beeswarm plot - NY mean wages.tsv': {
      name: 'ニューヨークの職業別平均賃金',
      category: 'ビースウォームプロット',
    },
    './sample-datasets/Contour plot - Mean temperature in Paris 1944-1945.tsv': {
      name: '第二次世界大戦中のパリの気温',
      category: '等高線プロット',
    },
    './sample-datasets/Bubble Chart - TOP 50 Groossing Movies.tsv': {
      name: '歴代興行収入トップの映画',
      category: 'バブルチャート',
    },
    './sample-datasets/Bump chart - Foreign residents in Milan.tsv': {
      name: 'ミラノの外国人居住者',
      category: 'バンプチャート',
    },
    './sample-datasets/Chord Diagram - Estimated migration flows between macro-areas.csv': {
      name: '1960〜1970年のマクロ地域間の推定移住フロー',
      category: 'コード図',
    },
    './sample-datasets/Circle Packing - Most populated cities.tsv': {
      name: '大陸別の人口最多都市',
      category: 'サークルパッキング',
    },
    './sample-datasets/Hexbin - basketball shots.tsv': {
      name: 'コービー・ブライアントのシュート',
      category: '六角形ビニング、ボロノイ図',
    },
    './sample-datasets/Treemap - Orchestra.tsv': {
      name: '楽器別のオーケストラ編成',
      category: 'ツリーマップ',
    },
    './sample-datasets/Gantt chart - Italian PMs and presidents.tsv': {
      name: 'イタリアの首相と大統領',
      category: 'ガントチャート',
    },
    './sample-datasets/Line chart - RIAA Music format revenues.tsv': {
      name: '音楽フォーマット別の売上',
      category: '折れ線グラフ',
    },
    './sample-datasets/Sankey diagram - Energy flows.tsv': {
      name: '英国のエネルギーフロー(2050年)',
      category: 'サンキー図',
    },
    './sample-datasets/Sunburst - Wine Aromas.tsv': {
      name: 'ワインの香りと頻度',
      category: 'サンバースト図',
    },
    './sample-datasets/Multiset Barchart - Happiness Index.tsv': {
      name: '幸福度指数',
      category: '集合棒グラフ',
    },
    './sample-datasets/Stacked barchart - GDP sector composition.tsv': {
      name: 'GDPの産業別構成',
      category: '円グラフ、積み上げ棒グラフ',
    },
    './sample-datasets/Dendrogram - Felidae classification.tsv': {
      name: 'ネコ科の分類(猫とその仲間)',
      category: 'デンドログラム、円形デンドログラム',
    },
    './sample-datasets/Convex hull - Iris flowers.tsv': {
      name: 'アヤメの花',
      category: '凸包、平行座標プロット',
    },
    './sample-datasets/Matrix Plot - Letters frequencies by language.tsv': {
      name: '言語別の文字出現頻度',
      category: 'マトリックスプロット(ヒートマップ)',
    },
    './sample-datasets/Radar Chart - Fifa players.tsv': {
      name: 'FIFA選手の成績',
      category: 'レーダーチャート',
    },
    './sample-datasets/Streamgraph - Olympics Medals.tsv': {
      name: 'オリンピックのメダル',
      category: 'ストリームグラフ',
    },
    './sample-datasets/Violin plot - Weather in New York.tsv': {
      name: 'ニューヨークの天気(2012〜2015年)',
      category: 'バイオリンプロット、箱ひげ図',
    },
    './sample-datasets/Bar chart - Netflix Original Series.tsv': {
      name: 'Netflixオリジナルシリーズ(2013〜2017年)',
      category: '棒グラフ',
    },
    './sample-datasets/Slope graph - Premier SerieA ranking.tsv': {
      name: 'プレミアリーグとセリエAの勝ち点',
      category: 'スロープチャート',
    },
  },
}

export function translateSampleName(sample, lang) {
  const entry = sampleText[lang] && sampleText[lang][sample.url]
  return (entry && entry.name) || sample.name
}

export function translateSampleCategory(sample, lang) {
  const entry = sampleText[lang] && sampleText[lang][sample.url]
  return (entry && entry.category) || sample.category
}
