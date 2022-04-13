import React from "react";

import Lottery from "./components/lottery/Lottery";
import Counter from "./components/counter/Counter";
import Input from "./components/form/Input";
import IndirectParent from "./components/communication/IndirectParent";
import DirectParent from "./components/communication/DirectParent";
import UserInfo from "./components/conditional/UserInfo";
import ProductsTable from "./components/repetition/ProductsTable";
import StudentList from "./components/repetition/StudentList";
import Card from "./components/layout/Card";
import First from "./components/basics/First";
import WithProps from "./components/basics/WithProps";
import Fragment from "./components/basics/Fragment";
import Random from "./components/basics/Random";
import Family from "./components/basics/Family";
import FamilyMember from "./components/basics/FamilyMember";
import OddOrEven from "./components/conditional/OddOrEven";

import "./App.css"

export default () => {
    return (
        <div className="App">
            <h1> Fundamentos React </h1>

            <div className="Cards">
                <Card title="#13 - Lottery" color="#00A170">
                    <Lottery quantity={10}/>
                </Card>

                <Card title="#12 - Counter" color="#0072B5">
                    <Counter initialNumber={10}/>
                </Card>

                <Card title="#11 - Controlled Component" color="#E15D44">
                    <Input/>
                </Card>

                <Card title="#10 - Indirect Communication" color="#6B5B95">
                    <IndirectParent/>
                </Card>

                <Card title="#09 - Direct Communication" color="#F5DF4D">
                    <DirectParent/>
                </Card>

                <Card title="#08 - Conditional View" color="#BC243C">
                    <OddOrEven number={21}/>
                    <UserInfo user={{name: 'Júlia'}}/>
                    <UserInfo user={{}}/>
                    <UserInfo/>
                </Card>

                <Card title="#07 - Products Table" color="#EFC050">
                    <ProductsTable/>
                </Card>

                <Card title="#06 - Repetition" color="#009B77">
                    <StudentList/>
                </Card>

                <Card title="#05 - Component With Children" color="#FF6F61">
                    <Family lastName="Ferreira">
                        <FamilyMember nome="Ana"/>
                        <FamilyMember nome="João"/>
                        <FamilyMember nome="Marco"/>
                    </Family>
                </Card>

                <Card title="#04 - Random Number Exercise" color="#0D0">
                    <Random max={10} min={1}/>
                </Card>

                <Card title="#03 - Fragmento" color="#32CBFF">
                    <Fragment/>
                </Card>

                <Card title="#02 - With props" color="#EF9CDA">
                    <WithProps
                        title='Situação do Aluno'
                        name='Gustavo'
                        grade={5.0}
                    />
                </Card>

                <Card title="#01 - First Exercise"> <First/> </Card>
            </div>
        </div>
    )
}