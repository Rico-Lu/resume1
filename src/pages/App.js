import React, { Component } from 'react';
import styles from './App.module.scss';
import { Link, Route, withRouter } from 'react-router-dom';
import HomePage from './HomePage'
// import WorkPage from './WorkPage'
// import WorkPageDetail from './WorkPageDetail'

class App extends Component {
  render() {
    return (
      <div className={styles.App}>


        <header className={styles.header}>
          <div className={styles.box}>
            <Link to="/"><div className={styles.boxleft}>Whatever on the left</div></Link>
            <div className={styles.boxright}>
              <Link to="/"><p>HOME</p></Link>
              <Link to="/works"><p>WORKS</p></Link>
            </div>
          </div>
        </header>


        <section className={styles.content}>
          <div className={styles.wrap}>

            {/* 个人简介 */}
            <section className={styles.brief}>
              <img src={require("../assets/images/avatar.jpg")} />
              <h2>张瑞彬</h2>
              <ul>
                <li>DOB: 1988.08</li>
                <li>电话：136-9166-5861</li>
                <li>工作经验：4年</li>
                <li>深圳南山</li>
                <li>邮箱：352515727@qq.com</li>
                <li>学历：硕士研究生</li>
              </ul>
              {/* <p>I design applications, interactive systems and websites. I love using technology in creative contexts.</p>
              <p>I am a freelancer based in Utrecht, the Netherlands.</p>
              <p>Contact me at thijs@vauxlab.com</p> */}
            </section>

            {/* 作品列表 */}
            <section className={styles.work}>
              <div className={styles.title}>
                <h3>教育背景</h3>
                <p>2012.09 - 2015.06  西南政法大学  商法专业（硕士）</p>
                <p>2007.09 - 2011.06  西南政法大学  经济学专业，法学专业（本科双硕士）</p>
              </div>
              {/* <WorkLists dataSource={worksData.data} /> */}
            </section>

            <section className={styles.work}>
              <div className={styles.title}>
                <h3>证书技能</h3>
                <p>律师证（法律职业资格证书A证）</p>
                <p>CPA注册会计师（已通过会计、税法、经济法）</p>
                <p>CFA美国特许金融分析师一级</p>
                <p>基金从业资格证</p>
                <p>证券从业资格证</p>
              </div>
              {/* <WorkLists dataSource={worksData.data} /> */}
            </section>


            <section className={styles.work}>
              <div className={styles.title}>
                <h3>工作经历</h3>


                <h4><b>2017年4月—至今 深圳市华商鼎信股权投资基金管理有限公司（PE） 投资经理</b></h4>
                <p>    -负责公司投资项目立项、项目考察、撰写项目可行性报告、项目决策汇报、投资实施、投后管理事
宜；</p>
                <p>    -负责公司私募股权基金产品（含FOF）的设立、投资者认购、备案、运营管理、退出清算等事宜；</p>
                <p>    -协助公司募集，必要时与潜在投资者对接，沟通意向项目的情况；</p>
                <p>    -负责从项目信息、财务核查和法律核查等角度对公司公司日常披露工作的审查。</p>

                <p></p>

                <h4><b>2016年9月—2017年4月 国浩律师（深圳）事务所 资本市场律师</b></h4>
                <p>    -为中国境内（A股、新三板）上市提供法律服务，包括尽职调查，起草公司章程及其他内部制度，
准备提交至相关主管部门的审批、许可、证照和备案的申请文件，就重大法律问题，代表客户与相
关主管部门进行沟通等；</p>
                <p>    -为客户的投资并购提供法律服务，主要包括尽职调查；合同起草、审查合同及其他交易文件；就重
大法律问题，代表客户与交易对方沟通等。</p>
                <p>    -为客户提供常年法律顾问服务。</p>

                <h4><b>2015年7月—2016年8月 中国葛洲坝集团易普力股份有限公司 投资并购部 投资论证</b></h4>
                <p>    -负责项目立项、项目初步考察、项目尽调、项目可执行报告编写、项目决策汇报、投资实施、投后
管理等工作；</p>
                <p>    -负责部门年度投资计划的编写，部门制度《对外投资管理办法》、《股权产权投资实施细则》等制
度的编写，部门建设方案的编写，部门项目年度投资项目的报告编写等工作；</p>
                <p>    -负责针对重大项目，借助外力外脑，与律师事务所、会计师事务所和资产评估机构等工作对接。</p>

              </div>
              {/* <WorkLists dataSource={worksData.data} /> */}
            </section>

          </div>
        </section>



        <footer className={styles.footer}>
          <p>© <b>2020 Ruibin Zhang</b></p>
          <p>Handmade with</p>
        </footer>
      </div>
    );
  }
}

export default App;
