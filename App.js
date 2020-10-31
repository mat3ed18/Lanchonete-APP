import React, { useState, useEffect } from "react";
import { CheckBox, Text, StyleSheet, View, Button, Image } from "react-native";

const App = () => {

    const [getOpcao1, setOpcao1] = useState(false);
    const [getOpcao2, setOpcao2] = useState(false);
    const [getOpcao3, setOpcao3] = useState(false);
    const [getOpcao4, setOpcao4] = useState(false);
    const [getOpcao5, setOpcao5] = useState(false);
    const [getOpcao6, setOpcao6] = useState(false);
    const [getOpcao7, setOpcao7] = useState(false);
    const [getOpcao8, setOpcao8] = useState(false);
    const [getOpcao9, setOpcao9] = useState(false);
    const [getOpcao10, setOpcao10] = useState(false);

    const [total, setTotal] = useState(0);

    const amount = 0;

    useEffect(() => {
        const interval = setInterval(() => {
            setTotal(total => total);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    function url (url) {
        return {uri: url}
    }

    function amountLoad() {
        setTotal(total => 0);
        const opcoes = [getOpcao1, getOpcao2, getOpcao3, getOpcao4, getOpcao5, getOpcao6, getOpcao7, getOpcao8, getOpcao9, getOpcao10];
        const valores = [14, 5, 35, 12, 9, 4, 25, 11, 17, 8];

        for(let i = 0; i < opcoes.length; i++){
            if (opcoes[i] == true) {
                setTotal(total => total + valores[i]);
            } else {
                // setTotal(total => total - valores[i]);
            }
        }
    }

    function handleClick(e) {
        // e.preventDefault();
        amountLoad();
    }



    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Lanchonete APP</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.products}>
                    <View style={styles.product}>
                        <CheckBox value={getOpcao1} onValueChange={setOpcao1} style={styles.pOption} onClick={handleClick}/>
                        <Image style={styles.pImage} source={url("https://img.icons8.com/fluent/50/000000/hamburger.png")}/>
                        <View style={styles.pInfo}>
                            <Text style={styles.pName}>Hamburger</Text>
                            <Text style={styles.pDescription}>Pão de hamburger, queijo, tomate, alface, hamburger bovino, maionese</Text>
                        </View>
                        <View style={styles.pPrice}>
                            <Text>R$ 14.00</Text>
                        </View>
                    </View>
                    <View style={styles.product}>
                        <CheckBox value={getOpcao2} onValueChange={setOpcao2} style={styles.pOption} onClick={handleClick}/>
                        <Image style={styles.pImage} source={url("https://img.icons8.com/fluent/50/000000/hot-dog.png")}/>
                        <View style={styles.pInfo}>
                            <Text style={styles.pName}>Hot Dog</Text>
                            <Text style={styles.pDescription}>Pão, salsicha, batata-palha, maionese, purê de maionese, ketchup e mostarda</Text>
                        </View>
                        <View style={styles.pPrice}>
                            <Text>R$ 5,00</Text>
                        </View>
                    </View>
                    <View style={styles.product}>
                        <CheckBox value={getOpcao3} onValueChange={setOpcao3} style={styles.pOption} onClick={handleClick}/>
                        <Image style={styles.pImage} source={url("https://img.icons8.com/fluent/50/000000/pizza.png")}/>
                        <View style={styles.pInfo}>
                            <Text style={styles.pName}>Pizza</Text>
                            <Text style={styles.pDescription}>Mussarela, tomate, orégano e azeitona</Text>
                        </View>
                        <View style={styles.pPrice}>
                            <Text>R$ 35,00</Text>
                        </View>
                    </View>
                    <View style={styles.product}>
                        <CheckBox value={getOpcao4} onValueChange={setOpcao4} style={styles.pOption} onClick={handleClick}/>
                        <Image style={styles.pImage} source={url("https://img.icons8.com/fluent/50/000000/sandwich-with-fried-egg.png")}/>
                        <View style={styles.pInfo}>
                            <Text style={styles.pName}>Pão com Ovo</Text>
                            <Text style={styles.pDescription}>Pão e Ovo</Text>
                        </View>
                        <View style={styles.pPrice}>
                            <Text>R$ 12,00</Text>
                        </View>
                    </View>
                    <View style={styles.product}>
                        <CheckBox value={getOpcao5} onValueChange={setOpcao5} style={styles.pOption} onClick={handleClick}/>
                        <Image style={styles.pImage} source={url("https://img.icons8.com/fluent/50/000000/french-fries.png")}/>
                        <View style={styles.pInfo}>
                            <Text style={styles.pName}>Batata Frita</Text>
                            <Text style={styles.pDescription}>Batatas fritas (300g) e ketchup</Text>
                        </View>
                        <View style={styles.pPrice}>
                            <Text>R$ 9,00</Text>
                        </View>
                    </View>
                    <View style={styles.product}>
                        <CheckBox value={getOpcao6} onValueChange={setOpcao6} style={styles.pOption} onClick={handleClick}/>
                        <Image style={styles.pImage} source={url("https://img.icons8.com/fluent/50/000000/potato-chips.png")}/>
                        <View style={styles.pInfo}>
                            <Text style={styles.pName}>Batata Chips</Text>
                            <Text style={styles.pDescription}>Batata chips e molho especial</Text>
                        </View>
                        <View style={styles.pPrice}>
                            <Text>R$ 4,00</Text>
                        </View>
                    </View>
                    <View style={styles.product}>
                        <CheckBox value={getOpcao7} onValueChange={setOpcao7} style={styles.pOption} onClick={handleClick}/>
                        <Image style={styles.pImage} source={url("https://img.icons8.com/fluent/50/000000/group-of-fruits.png")}/>
                        <View style={styles.pInfo}>
                            <Text style={styles.pName}>Salada Mista</Text>
                            <Text style={styles.pDescription}>Banana, duas tangerinas e três kiwis</Text>
                        </View>
                        <View style={styles.pPrice}>
                            <Text>R$ 25,00</Text>
                        </View>
                    </View>
                    <View style={styles.product}>
                        <CheckBox value={getOpcao8} onValueChange={setOpcao8} style={styles.pOption} onClick={handleClick}/>
                        <Image style={styles.pImage} source={url("https://img.icons8.com/fluent/50/000000/cupcake.png")}/>
                        <View style={styles.pInfo}>
                            <Text style={styles.pName}>Cupcake</Text>
                            <Text style={styles.pDescription}>Bolinho de chocolate recheado com morango ou doce de leite, chantily e cereja</Text>
                        </View>
                        <View style={styles.pPrice}>
                            <Text>R$ 11,00</Text>
                        </View>
                    </View>
                    <View style={styles.product}>
                        <CheckBox value={getOpcao9} onValueChange={setOpcao9} style={styles.pOption} onClick={handleClick}/>
                        <Image style={styles.pImage} source={url("https://img.icons8.com/fluent/50/000000/cookies.png")}/>
                        <View style={styles.pInfo}>
                            <Text style={styles.pName}>Cookie</Text>
                            <Text style={styles.pDescription}>Biscoito com gotas de chocolate (100g)</Text>
                        </View>
                        <View style={styles.pPrice}>
                            <Text>R$ 17,00</Text>
                        </View>
                    </View>
                    <View style={styles.product}>
                        <CheckBox value={getOpcao10} onValueChange={setOpcao10} style={styles.pOption} onClick={handleClick}/>
                        <Image style={styles.pImage} source={url("https://img.icons8.com/fluent/50/000000/peanuts.png")}/>
                        <View style={styles.pInfo}>
                            <Text style={styles.pName}>Amendoim</Text>
                            <Text style={styles.pDescription}>Amendoim com cobertura de chocolate ou baunilha (50g)</Text>
                        </View>
                        <View style={styles.pPrice}>
                            <Text>R$ 8,00</Text>
                        </View>
                    </View>
                </View>
            </View>
            <Button title="FINALIZAR" onPress={() => alert(getOpcao1)}/>
            <View style={styles.footer}>
            <Text>Subtotal: R$ {total}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {

    }, 
    header: {

    }, 
    title: {
        fontSize: 30
    }, 
    body: {

    },
    products: {
        
    }, 
    product: {
        flexDirection: 'row'
    }, 
    pOption: {
        resizeMode: "center", 
        width: '8%',
        height: 48,
        aspectRatio: 1,
        padding: '2%'
    },
    pImage: {
        resizeMode: "center", 
        width: '10%',
        height: undefined, 
        aspectRatio: 1
    },
    pInfo: {
        width: '70%'
    },
    pName: {

    },
    pDescription: {

    },
    pPrice: {
        width: '12%'
    },
    footer: {
        flexDirection: 'row'
    }
});

export default App;
