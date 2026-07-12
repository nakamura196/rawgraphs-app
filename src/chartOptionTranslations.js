// Translations for chart OPTION metadata (group headers, option labels,
// dimension names, and select-dropdown values).
//
// Like chart names (see chartTranslations.js), these strings are NOT part of
// this app: they come from the visualOptions/dimensions config of each chart in
// `@rawgraphs/rawgraphs-charts`, so the react-i18next translation.json files do
// not cover them. They are applied at the DISPLAY layer only:
//   - group headers      -> ChartOptions.js (<h5>{groupName}</h5>)
//   - option labels      -> ChartOptions.js WrapControlComponent (label prop)
//   - select values      -> ChartOptions.js WrapControlComponent (options prop)
//   - dimension names    -> DataMapping (ChartDimensionItem)
//
// Never mutate the underlying config values (they are used as option/dimension
// identifiers); translate only what is rendered.

const groups = {
  Labels: 'ラベル',
  artboard: 'アートボード',
  axes: '軸',
  chart: 'チャート',
  color: '色',
  colors: 'カラー',
  labels: 'ラベル',
  series: '系列',
}

const optionLabels = {
  'Arcs only on the top': '弧を上部のみ',
  'Arrows heads radius': '矢印先端の半径',
  'Auto hide labels': 'ラベルを自動で隠す',
  'Auto-place ticks on x axis': 'X軸の目盛りを自動配置',
  'Axis labels padding': '軸ラベルの余白',
  Bandwidth: 'バンド幅',
  'Bars orientation': '棒の向き',
  'Bars width': '棒の幅',
  'Bin diameter': 'ビンの直径',
  'Chord Colors': 'コードの色',
  'Chord opacity': 'コードの不透明度',
  'Chords padding': 'コードの余白',
  'Circular links gap': '円形リンクの間隔',
  'Clip to polygon': '多角形でクリップ',
  'Color scale': 'カラースケール',
  'Curve type': '曲線タイプ',
  'Curves type': '曲線タイプ',
  'Donut thickness': 'ドーナツの太さ',
  'Dots diameter': '点の直径',
  'Draw as donuts': 'ドーナツで描画',
  'Fill opacity': '塗りの不透明度',
  'First week day': '週の始まりの曜日',
  'Flows alignment': 'フローの整列',
  'Grid columns': 'グリッドの列数',
  'Groups padding': 'グループの余白',
  'Groups stroke width': 'グループの線幅',
  'Hierarchy labels': '階層ラベル',
  'Hierarchy labels position': '階層ラベルの位置',
  'Inner diameter': '内径',
  'Interquartile range multiplier': '四分位範囲の乗数',
  'Iterations (attempts to solve overlaps)': '反復回数(重なり解消の試行)',
  Label: 'ラベル',
  'Label repelling force': 'ラベルの反発力',
  'Labels position': 'ラベルの位置',
  'Labels threshold steps': 'ラベル表示のしきい値ステップ',
  'Layout algorithm': 'レイアウトアルゴリズム',
  'Legend width': '凡例の幅',
  'Lines opacity (0-1)': '線の不透明度(0-1)',
  'Links blend mode': 'リンクの描画モード',
  'Links opacity (0-1)': 'リンクの不透明度(0-1)',
  'Margin (bottom)': 'マージン(下)',
  'Margin (left)': 'マージン(左)',
  'Margin (right)': 'マージン(右)',
  'Margin (top)': 'マージン(上)',
  'Max diameter': '最大直径',
  'Max. ticks on x axis': 'X軸の最大目盛り数',
  'Maximum diameter': '最大直径',
  'Min diameter': '最小直径',
  'Min. vertical padding': '最小の縦余白',
  'Nodes alignment': 'ノードの整列',
  'Nodes diameter': 'ノードの直径',
  'Nodes width': 'ノードの幅',
  'Number of bands': 'バンドの数',
  'Number of bins': 'ビンの数',
  'Number of columns': '列数',
  Orientation: '向き',
  Padding: '余白',
  'Padding (%)': '余白(%)',
  'Padding between bars': '棒の間隔',
  'Padding between sets': 'セット間の余白',
  'Padding between years (px)': '年ごとの余白(px)',
  'Polygon edges': '多角形の辺数',
  'Polygon rotation': '多角形の回転',
  'Regular polygon': '正多角形',
  'Repeat axis labels for each series': '系列ごとに軸ラベルを繰り返す',
  'Ring width': 'リングの幅',
  'Round Corners (%)': '角の丸み(%)',
  'Scale hexagons area': '六角形の面積をスケール',
  'Seed for random computations': '乱数計算のシード',
  'Set X origin to 0': 'X軸の原点を0に設定',
  'Set Y origin to 0': 'Y軸の原点を0に設定',
  'Show Chord Group Labels': 'コードグループのラベルを表示',
  'Show Y axis': 'Y軸を表示',
  'Show arrow heads': '矢印の先端を表示',
  'Show band labels': 'バンドラベルを表示',
  'Show boxpot values': '箱ひげの値を表示',
  'Show count labels': '件数ラベルを表示',
  'Show dots': '点を表示',
  'Show dots on data values': 'データ値に点を表示',
  'Show grid': 'グリッドを表示',
  'Show hierarchy labels': '階層ラベルを表示',
  'Show labels': 'ラベルを表示',
  'Show legend': '凡例を表示',
  'Show min/max on x axis': 'X軸に最小/最大を表示',
  'Show negative values as': '負の値の表示方法',
  'Show nodes values': 'ノードの値を表示',
  'Show outline': 'アウトラインを表示',
  'Show pies titles': '円グラフのタイトルを表示',
  'Show series grid': '系列のグリッドを表示',
  'Show series titles': '系列のタイトルを表示',
  'Show streams labels': 'ストリームのラベルを表示',
  'Show stroke': '枠線を表示',
  'Show values on arcs': '弧に値を表示',
  'Size only leaf nodes': 'リーフノードのみサイズ設定',
  'Sort X axis by': 'X軸の並び順',
  'Sort Y axis by': 'Y軸の並び順',
  'Sort arcs by': '弧の並び順',
  'Sort bars by': '棒の並び順',
  'Sort chords by': 'コードの並び順',
  'Sort circles by': '円の並び順',
  'Sort groups by': 'グループの並び順',
  'Sort nodes by': 'ノードの並び順',
  'Sort pies by': '円グラフの並び順',
  'Sort series by': '系列の並び順',
  'Sort stacks by': 'スタックの並び順',
  'Sort streams by': 'ストリームの並び順',
  'Sort violins by': 'バイオリンの並び順',
  'Sorting years': '年の並び順',
  'Source inner padding': 'ソースの内側余白',
  'Streams vertical alignment': 'ストリームの縦整列',
  'Stroke width': '線幅',
  'Target inner padding': 'ターゲットの内側余白',
  'Tiling method': 'タイリング方法',
  'Use same X scale': '同じXスケールを使用',
  'Use same Y scale': '同じYスケールを使用',
  'Use same scale': '同じスケールを使用',
}

const dimensionLabels = {
  Arcs: '弧',
  Bars: '棒',
  Color: '色',
  'Connection by': '接続',
  Date: '日付',
  Dimensions: 'ディメンション',
  'End Date': '終了日',
  Groups: 'グループ',
  Hierarchy: '階層',
  Label: 'ラベル',
  'Leaf label': 'リーフラベル',
  Lines: '線',
  Ranking: 'ランキング',
  Series: '系列',
  Sets: 'セット',
  Size: 'サイズ',
  Source: 'ソース',
  'Source node': 'ソースノード',
  Spokes: 'スポーク',
  'Start date': '開始日',
  Steps: 'ステップ',
  Streams: 'ストリーム',
  Target: 'ターゲット',
  'Target node': 'ターゲットノード',
  'X Axis': 'X軸',
  'Y Axis': 'Y軸',
  'x axis': 'x軸',
  'y axis': 'y軸',
}

const selectValues = {
  Ascending: '昇順',
  Descending: '降順',
  Earliest: '最も早い',
  Expand: '拡張',
  Horizontal: '水平',
  Horizontally: '水平方向',
  InDegree: '入次数',
  'Inside out': '内側から外へ',
  Italic: 'イタリック',
  Linear: '直線',
  'Links count': 'リンク数',
  'Minimize Overlaps': '重なりを最小化',
  Mirrored: 'ミラー',
  Name: '名前',
  None: 'なし',
  Offset: 'オフセット',
  'On path': 'パス上',
  'On point': '点上',
  Original: '元の順序',
  OutDegree: '出次数',
  Primary: 'プライマリ',
  Reverse: '逆順',
  'Same size': '同じサイズ',
  Secondary: 'セカンダリ',
  Silhouette: 'シルエット',
  'Size (ascending)': 'サイズ(昇順)',
  'Size (descending)': 'サイズ(降順)',
  'Start date (ascending)': '開始日(昇順)',
  'Start date (descending)': '開始日(降順)',
  Step: 'ステップ',
  'Step After': 'ステップ(後)',
  'Step Before': 'ステップ(前)',
  'Total size (ascending)': '合計サイズ(昇順)',
  'Total size (descending)': '合計サイズ(降順)',
  'Total value (ascending)': '合計値(昇順)',
  'Total value (descending)': '合計値(降順)',
  Vertical: '垂直',
  Vertically: '垂直方向',
  'Weighted degree': '重み付き次数',
  'Weighted inDegree': '重み付き入次数',
  'Weighted outDegree': '重み付き出次数',
  Wiggle: 'ウィグル',
  // Interpolation/curve algorithm names (Basis, Cardinal, Monotone X, Squarify,
  // ...) are intentionally left untranslated: they are proper names.
}

function lookup(map, value, lang) {
  if (lang !== 'ja') return value
  if (typeof value !== 'string') return value
  return map[value] || value
}

export function translateOptionGroup(value, lang) {
  return lookup(groups, value, lang)
}

export function translateOptionLabel(value, lang) {
  return lookup(optionLabels, value, lang)
}

export function translateDimensionName(value, lang) {
  return lookup(dimensionLabels, value, lang)
}

export function translateSelectValue(value, lang) {
  return lookup(selectValues, value, lang)
}
