// Translations for chart metadata (names, descriptions, categories).
//
// Chart names/descriptions/categories are NOT part of this app: they come from
// the `@rawgraphs/rawgraphs-charts` (and `@rawgraphs/rawgraphs-calendar-heatmap`)
// packages via `src/charts.js`, so the react-i18next `translation.json` files do
// not cover them. This module maps each chart's *original* metadata to Japanese
// and is applied at the DISPLAY layer only (see ChartSelector.js).
//
// IMPORTANT: never mutate `metadata.name` itself — it is used as an identifier
// when saving/loading projects (import_export_v1.js) and when dispatching to the
// web worker (worker.js). Translate only what is shown to the user.
//
// Keyed by `metadata.id`, falling back to `metadata.name` for charts that ship
// without an id (currently the Gantt chart).

const chartText = {
  ja: {
    'rawgraphs.alluvialdiagram': {
      name: 'アルビアルダイアグラム',
      description:
        'カテゴリ次元間の相関を「流れ」として表現し、共通する項目を持つカテゴリを視覚的につなぎます。各長方形は選択した次元の固有の値を表し、高さがその大きさに比例します。相関は曲線で表され、線の太さが値に比例します。',
    },
    'rawgraphs.arcdiagram': {
      name: 'アーク図',
      description:
        'ノード間の関係を確認できるネットワーク図の一種です。ノードは横軸上に並び、リンクは時計回りの弧で表されます。ノードの上側の弧は左から右への接続を、下側は右から左への接続を意味します。',
    },
    'rawgraphs.barchart': {
      name: '棒グラフ',
      description:
        'カテゴリ次元と関連する量を表示します。各棒がひとつのカテゴリを表し、長さが量的次元に比例します。',
    },
    'rawgraphs.barchartmultiset': {
      name: '集合棒グラフ',
      description:
        'カテゴリに関連する複数の量的次元を表示します。棒はカテゴリ次元に従って集合としてまとめられ、各棒が量的次元を高さで表します。',
    },
    'rawgraphs.barchartstacked': {
      name: '積み上げ棒グラフ',
      description:
        'カテゴリに関連する複数の量的次元を表示します。棒はカテゴリ次元に従って積み上げられ、各棒が量的次元を高さで表します。',
    },
    'rawgraphs.beeswarm': {
      name: 'ビースウォームプロット',
      description:
        '連続的な次元上での項目の分布を表示します。各項目(行)は横軸上に配置された点で表されます。縦方向は点どうしの重なりを避けて分布を示すために使われます。点の面積でさらに量的次元を、色で量的または質的次元を表現できます。',
    },
    'rawgraphs.boxplot': {
      name: '箱ひげ図',
      description:
        '量的な分布を5つの代表的な統計量(最小値・第1四分位数・中央値・第3四分位数・最大値)で要約します。',
    },
    'rawgraphs.bubblechart': {
      name: 'バブルチャート',
      description:
        '基本レイアウトは散布図で、2つの連続次元間の相関を確認できます。さらに大きさで量的次元を、色で量的または質的次元を表現できます。',
    },
    'rawgraphs.bumpchart': {
      name: 'バンプチャート',
      description:
        '連続次元上での複数カテゴリの比較と、その順位の変化を確認できます。既定では順位はストリームの大きさに基づきます。',
    },
    'rawgraphs.chorddiagram': {
      name: 'コード図',
      description:
        'ノード間の関係を示します。ノードの大きさは入出力リンクの合計を表します。関係は弧で描かれ、太さが値を表します。',
    },
    'rawgraphs.circlepacking': {
      name: 'サークルパッキング',
      description:
        '階層構造の葉ノードの値を円の面積で表示します。階層構造は入れ子の円で表現されます。さらに大きさで量的次元を、色で量的または質的次元を表現できます。',
    },
    'rawgraphs.circulardendrogram': {
      name: '円形デンドログラム',
      description:
        '階層構造のデータを放射状のツリー構造で表示します。ルートノードが中心にあり、階層が外側へ広がります。ノードの面積でさらに量的次元を、色で量的または質的次元を表現できます。',
    },
    'rawgraphs.contourplot': {
      name: '等高線プロット',
      description:
        '点群の推定密度を示します。大規模なデータで点が重なりすぎる(オーバープロット)のを避けるのに特に有用です。',
    },
    'rawgraphs.convexhull': {
      name: '凸包',
      description:
        '数学における凸包とは、点の集合を含む最小の凸形状のことです。散布図に適用すると、同じカテゴリに属する点を識別するのに役立ちます。',
    },
    'rawgraphs.lineardendrogram': {
      name: '線形デンドログラム',
      description:
        '階層構造のデータをツリー構造で表示します。ルートノードが左、葉が右に配置されます。ノードの大きさでさらに量的次元を、色で量的または質的次元を表現できます。',
    },
    // Gantt chart ships without a metadata.id — keyed by its name instead.
    'Gantt chart': {
      name: 'ガントチャート',
      description:
        'ガントチャートは、1910年代にヘンリー・ガントが考案した棒グラフの一種で、プロジェクトのスケジュールを表します。プロジェクトを構成する各要素の開始日と終了日を示します。',
    },
    'rawgraphs.hexagonalbinning': {
      name: '六角形ビニング',
      description:
        '六角形ビニングは、点が多すぎて重なってしまう問題に対処する方法です。点そのものではなく密度をプロットします。点は格子状の六角形にまとめられ、六角形ごとの点の数(分布)を色または面積で表します。',
    },
    'rawgraphs.horizongraph': {
      name: 'ホライズングラフ',
      description:
        '連続区間または期間にわたる量的次元を表示します。ホライズングラフは位置と色を組み合わせて縦方向のスペースを節約します。',
    },
    'rawgraphs.linechart': {
      name: '折れ線グラフ',
      description:
        '連続区間または期間にわたる量的次元を表示します。色を使って、さらに量的または質的次元を任意で表現できます。',
    },
    'rawgraphs.matrixplot': {
      name: 'マトリックスプロット',
      description:
        '2つのカテゴリ次元を横軸と縦軸に配置して比較できます。各グリフ(四角または円)が2つの次元の組み合わせを表します。関連する量的変数は大きさや色で表現できます。',
    },
    'rawgraphs.parallelcoordinates': {
      name: '平行座標プロット',
      description:
        '複数の連続次元を軸として表示し、データの各行が軸をまたいで値を結ぶ線として描かれます。',
    },
    'rawgraphs.piechart': {
      name: '円グラフ',
      description:
        '円を構成する弧を使って、全体を構成する値どうしの割合を確認できます。',
    },
    'rawgraphs.radarchart': {
      name: 'レーダーチャート',
      description:
        '複数の連続次元を、同じ点から放射状に配置した軸として表示します。各次元は中心から伸びる軸として表され、すべての軸に同じ尺度が適用されます。',
    },
    'rawgraphs.sankeydiagram': {
      name: 'サンキー図',
      description:
        'ネットワークのノード間の流れを表します。ノードは長方形で表され、高さが値を表します。流れは曲線で表され、太さが値に比例します。',
    },
    'rawgraphs.slopechart': {
      name: 'スロープチャート',
      description:
        '2つの連続次元を軸として示し、線でその関係を表すことで比較できます。',
    },
    'rawgraphs.streamgraph': {
      name: 'ストリームグラフ(エリアチャート)',
      description: '連続次元上で複数のカテゴリを比較できます。',
    },
    'rawgraphs.sunburst': {
      name: 'サンバースト図',
      description:
        '階層構造のデータと関連する量的次元を同心円で表示します。中心の円がルートノードを表し、階層が中心から外側へ広がります。各弧の角度が質的次元に対応します。',
    },
    'rawgraphs.treemap': {
      name: 'ツリーマップ',
      description:
        '階層構造のデータと関連する量的次元を表示します。ツリー構造の最下層を表す小さな長方形に分割された領域で構成されます。長方形の大きさは量的次元に依存します。',
    },
    'rawgraphs.violinplot': {
      name: 'バイオリンプロット',
      description:
        '数値次元の分布を示すのに役立ちます。形の幅は、データ内で同じ値を持つ項目の数を表します。',
    },
    'rawgraphs.voronoidiagram': {
      name: 'ボロノイ図',
      description:
        '2つの変数で定義された各点の周囲に最小の面積を作ります。散布図に適用すると、点どうしの距離を示すのに役立ちます。',
    },
    'rawgraphs.voronoitreemap': {
      name: 'ツリーマップ(ボロノイ)',
      description:
        '階層構造のデータと関連する量的次元を表示します。ボロノイ分割で計算された、ツリー構造の最下層を表す小さなセルに分割された領域で構成されます。セルの大きさは量的次元に依存します。寸法は反復的に計算されるため、面積は必ずしも値を正確に表すとは限りません。',
    },
    'rawgraphs.calendarheatmap': {
      name: 'カレンダーヒートマップ',
      description:
        'グリッドの色の変化でデータを可視化します。グリッドはカレンダー状に並んだ、1日を表す四角形で構成されます。',
    },
  },
}

// Category keys are compared case-insensitively because the source data is
// inconsistent (e.g. the Voronoi diagram uses "Correlations" with a capital C
// while every other chart uses "correlations").
const categoryText = {
  ja: {
    correlations: '相関',
    proportions: '割合',
    networks: 'ネットワーク',
    distributions: '分布',
    'time series': '時系列',
    hierarchies: '階層',
    'time chunks': '時間区分',
  },
}

function chartKey(metadata) {
  return metadata.id || metadata.name
}

export function translateChartName(metadata, lang) {
  const entry = chartText[lang] && chartText[lang][chartKey(metadata)]
  return (entry && entry.name) || metadata.name
}

export function translateChartDescription(metadata, lang) {
  const entry = chartText[lang] && chartText[lang][chartKey(metadata)]
  return (entry && entry.description) || metadata.description
}

export function translateCategory(category, lang) {
  if (!category) return category
  const map = categoryText[lang]
  if (!map) return category
  return map[category] || map[category.toLowerCase()] || category
}
