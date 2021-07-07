const defaultDataset = {
    "init": {
        answers: [
            { content: "新型コロナウイルスに感染したかもしれない", nextId: "job_offer" },
            { content: "新型コロナウイルスのワクチンについて詳しく知りたい", nextId: "consultant" },
            { content: "生活が不安である", nextId: "community_activity" },
            { content: "新型コロナウイルスに関して相談したいことがある", nextId: "dating" },
        ],
        question: "新型コロナウイルスに関して何か疑問はありますか？",
    },
    "job_offer": {
        answers: [
            { content: "吐き気がある・高熱・頭痛がある", nextId: "website" },
            { content: "鼻水が出る・のどが痛い", nextId: "webapp" },
            { content: "何に対してもやる気が出ない。", nextId: "automation_tool" },
            { content: "その他", nextId: "other_jobs" }
        ],
        question: "どのような症状が出ていますか？",
    },
    "website": {
        answers: [
            { content: "問い合わせる", nextId: "contact" },
            { content: "最初の質問に戻る", nextId: "init" }
        ],
        question: "新型コロナウイルスに感染した疑いがあります。保健所に連絡してください",
    },
    "webapp": {
        answers: [
            { content: "問い合わせる", nextId: "contact" },
            { content: "最初の質問に戻る", nextId: "init" }
        ],
        question: "風邪の疑いがあります。十分に休息を取ってください。症状がひどければ病院へ行くことをおすすめします。",
    },
    "automation_tool": {
        answers: [
            { content: "問い合わせる", nextId: "contact" },
            { content: "最初の質問に戻る", nextId: "init" }
        ],
        question: "鬱の傾向があります。精神科での受診をおすすめします。",
    },
    "other_jobs": {
        answers: [
            { content: "問い合わせる", nextId: "contact" },
            { content: "最初の質問に戻る", nextId: "init" }
        ],
        question: "その他ですね。詳しい症状をお聞かせください。",
    },
    "consultant": {
        answers: [
            { content: "ワクチンを接種したい。接種会場を知りたい", nextId: "https://v-sys.mhlw.go.jp/search/" },
            { content: "ワクチンの予約をしたい", nextId: "community" },
            { content: "最初の質問に戻る", nextId: "init" }
        ],
        question: "ワクチンに関して知りたいことは何ですか？",
    },
    "community": {
        answers: [
            { content: "新型コロナウイルスが社会にどのような影響を与えているか知りたい", nextId: "community_activity" },
            { content: "自分でできる新型コロナウイルスの感染対策について知りたい", nextId: "https://torahack.web.app/community/" },
            { content: "最初の質問に戻る", nextId: "init" }
        ],
        question: "新型コロナウイルスは感染力の高い未知のウイルスです。",
    },
    "community_activity": {
        answers: [
            { content: "生活するためのお金が足りない", nextId: "https://kokoro.mhlw.go.jp/etc/coronavirus_info/" },
            { content: "1人の時間が増え、孤独を感じている", nextId: "https://torahack.web.app/community/" },
            { content: "最初の質問に戻る", nextId: "init" }
        ],
        question: "新型コロナウイルスは経済面で大きな影響を与えています。下でお困りのことはありますか？",
    },
    "dating": {
        answers: [
            { content: "問い合わせる", nextId: "contact" },
            { content: "最初の質問に戻る", nextId: "init" }
        ],
        question: "こちらからお問い合わせをお願いいたします。",
    },
}

export default defaultDataset