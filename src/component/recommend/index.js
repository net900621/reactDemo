import React from 'react';

import './index.css';
import movie001 from '../../assets/images/movie-001.jpg';
import movie002 from '../../assets/images/movie-002.jpg';

const data = [
    {
        name: "人间空间时间和人",
        desc: [
            "影片讲述了将战舰改造后踏上旅行，但船意外被卷入另一个世界的故事，是一部反射人类的道德和伦理界限的作品。张根硕和藤井美菜在片中分别饰演男女主人公亚当和夏娃。",
            "一艘老军舰上不同年龄和职业的人之间发生的故事，强奸，谋杀，兵变，金基德没有给予片中的人物丝毫的放松时间。电影中的所有人物既没有名字也没有背景，唯一重要的只有让人喘不过气来的“当下”。在一个戏剧性的人际关系的漩涡之中，一场关于食物和生存的斗争完全转向了荒诞。"
        ],
        poster: movie001
    },
    {
        name: "作家的谎言",
        desc: [
            "被誉为最出色治愈系作家－徐哲，年轻、有楼、做着自己喜欢的事，是成功的典范。他的文字被誉为心灵鸡汤，抚慰着无数读者的心灵。从他的作品，可以知道他是个善良、有原则、爱妻顾家的好男人。然而，他的财富，却是承继父亲所得。",
        　　"一日，在徐哲家楼上的单位来了一个新租客，为徐哲平淡似水的生活带来巨大冲击；新租客Elaine是个美艳动人的时尚女子。某夜，Elaine突然陈尸屋苑平台。警方接手调查，徐哲直认自己被Elaine勒索，暴怒之下错手推了Elaine落楼。案件本来应该完结，但警方的心理专家苏Sir在细心观察徐哲之下，认为他在说谎，而且整件事还存在不少疑点。",
            "为寻找真相，苏Sir穷追不舍。终于发现徐哲太太琦琦早知道徐哲与Elaine有染，这自然令苏Sir怀疑琦琦因爱成恨，继而杀人报复。究竟这是因为琦琦对徐哲的不忠展开报复，还是案中有案，局中有局？"
        ],
        poster: movie002
    }
];

function Desc (props){
    return (
        props.desc.map(item => (
            <p>{item}</p>
        ))
    )
}

class Recommend extends React.Component {
    render() {
        return (
            <div className="recommend">
                <h2>推荐列表</h2>
                <div className="recommend-list">
                    {
                        data.map(item => 
                            (
                                <div className="recommend-item" key={Date.now()}>
                                    <img src={item.poster} />
                                    <h3>{item.name}</h3>
                                    <Desc desc={item.desc} />
                                </div>
                            )
                        )
                    }
                </div>
            </div>
        )
    }
};

export default Recommend;