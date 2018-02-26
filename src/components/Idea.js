import React, { Component } from 'react'

export default class Idea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      market : ['EC', '投資・資産運用', 'FinTech', '融資', '決済','保険', '広告', '家電', '不動産', 'リノベーション', '外食', '料理', '食', '家事','ファッション', '人材・求職', 'クラウドソーシング', '介護', '教育', '旅行', 'インテリア', '車', 'ゲーム', '出会い', 'エンタメ・娯楽', 'ダイエット', '筋トレ', 'ヘルスケア', 'ソフトウェア開発', ''],
      detailMarket : ['HighEnd', 'LowEnd', 'CtoC', 'レコメンド', 'スマホ', 'スマホ', 'メディア', 'SNS', '動画', 'VR/AR', 'AI','中古', 'SaaS', 'シェアリング', 'マッチング', 'レンタル', 'サブスクリプション', 'コマース', '', '', '', ''],
      target : ['法人向け', '女性向け', '男性向け', '若者向け', '地域向け', '中年向け', '高齢者向け', '主婦向け', '専門職向け', 'エンジニア向け', '一人暮らし向け', '子育て家庭向け', 'ビジネスパーソン向け', '', '', '', '', '', ''],
      problem : ['高い', '使いにくい', '探しにくい', '面倒', '簡単に', '難しい', '忘れやすい', 'つまらない','ダサい', '遅い', '効果が低い', '質が低い', 'リスクが高い', 'コスパが悪い', 'イケてる', 'つらい', 'モテたい', '面白い', 'かわいい', '怖い',　'楽',　'不便','不快', '不安', '続かない', 'エモい', 'インスタ映えする', '', '', ''],
    };
  }

  randIdea() {
    var Ideas = [];
    for (let i = 0; i < 15; i++) {
      let Idea = {};
      Idea['market'] = this.state.market[Math.floor(Math.random() * this.state.market.length)];
      Idea['detailMarket'] = this.state.detailMarket[Math.floor(Math.random() * this.state.detailMarket.length)];
      Idea['target'] = this.state.target[Math.floor(Math.random() * this.state.target.length)];
      Idea['problem'] = this.state.problem[Math.floor(Math.random() * this.state.problem.length)];
      Ideas[i] = Idea;
    }
    return Ideas;
  }

  render() {

    const IdeaList = this.randIdea();
    return (
      <p>
          { IdeaList.map(idea => <IdeaItem market={idea.market} detailMarket={idea.detailMarket} target={idea.target} problem={idea.problem}/>) }
      </p>
    );
  }
}

class IdeaItem extends Component {
  render() {
    let IdeaItem = <div><b>{ this.props.market }</b>　<b>{ this.props.detailMarket }</b>　<b>{ this.props.target }</b> <b>{ this.props.problem }</b><br /><br /></div>;


    return (
       IdeaItem
    );
  }
}
