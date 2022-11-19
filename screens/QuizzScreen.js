import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import SafeAreaView from 'react-native-safe-area-view'
import questions from '../data/questions';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons'

const QuizzScreen = () => {
    const navigation = useNavigation();
    const data = questions;
    const [points, setPoints] = useState(0);
    const [index, setIndex] = useState(0);
    const [answerStatus, setAnswerStatus] = useState(null);
    const [answers, setAnswers] = useState([]);
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
    const [counter, setCounter] = useState(15);
    let interval = null;
    const currentQuestion = data.questions[index];
    const progressBar = Math.floor((index / data.questions.length) * 100);

    useEffect(() => {
        if (selectedAnswerIndex !== null) {
            if (selectedAnswerIndex === currentQuestion.réponse) {
                setPoints((points) => points + 5);
                setAnswerStatus(true);
                answers.push({ question: index + 1, answer: true });
            } else {
                setAnswerStatus(false);
                answers.push({ question: index + 1, answer: false });
            }
        }
    }, [selectedAnswerIndex]);

    useEffect(() => {
        setSelectedAnswerIndex(null);
        setAnswerStatus(null);
    }, [index]);

    useEffect(() => {
        const myInterval = () => {
            if (counter >= 1) {
                setCounter((counter) => counter - 1);
            }
            if (counter === 0) {
                setIndex(index + 1);
                setCounter(15);
            }
        };

        interval = setTimeout(myInterval, 1000);
        return () => {
            clearTimeout(interval);
        }
    }, [counter]);

    useEffect(() => {
        if (!interval) {
            setCounter(15);
        }
    }, [index]);

    useEffect(() => {
        if (index + 1 > data.questions.length) {
            navigation.navigate("Results", {
                answers: answers,
                points: points
            })
        }
    }, [index]);
    return (
        <SafeAreaView>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 10 }}>
                <Text>Quizz Challenge</Text>
                <Pressable style={{ padding: 10, backgroundColor: "magenta", borderRadius: 20 }}>
                    {<Text style={{ color: "white", textAlign: "center", fontWeight: "bold" }}>{counter}s</Text>}
                </Pressable>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginHorizontal: 10 }}>
                <Text>Progression</Text>
                <Text>({index + 1}/{data.questions.length})</Text>
            </View>
            <View
                style={{
                    backgroundColor: "white",
                    width: "100%",
                    flexDirection: "row",
                    alignItems: "center",
                    height: 10,
                    borderRadius: 20,
                    justifyContent: "center",
                    marginTop: 20,
                    marginLeft: 10
                }}
            >
                <Text
                    style={{
                        backgroundColor:"#FFC0CB",
                        borderRadius:12,
                        position:"absolute",
                        left:0,
                        height:10,
                        right:0,
                        width :`${progressBar}`+"%",
                        marginTop:20
                    }}>

                </Text>
            </View>

            <View style={{ backgroundColor: "#F0F8FF", marginTop: 30, padding: 10, borderRadius: 6, borderRadius: 20 }}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>{currentQuestion?.question}</Text>
                <View style={{ marginTop: 12 }}>
                    {currentQuestion?.propositions.map((item, index) => (
                        <Pressable onPress={() => selectedAnswerIndex === null && setSelectedAnswerIndex(index)}
                            style={
                                selectedAnswerIndex === index && index === currentQuestion.réponse - 1
                                    ? { flexDirection: "row", alignItems: "center", borderWidth: 0.5, borderColor: "#00FFF", backgroundColor: "green", marginVertical: 10 }
                                    : selectedAnswerIndex !== null && selectedAnswerIndex === index ?
                                        { flexDirection: "row", alignItems: "center", borderWidth: 0.5, borderColor: "#00FFF", backgroundColor: "red", marginVertical: 10 } :
                                        { flexDirection: "row", alignItems: "center", borderWidth: 0.5, borderColor: "#00FFF", marginVertical: 10 }
                            }>
                            {selectedAnswerIndex === index && index === currentQuestion?.réponse - 1 ? (
                                <AntDesign style={{ borderColor: "#00FFF", textAlign: "center", width: 40, borderRadius: 20, height: 40, padding: 10 }} name='checkcircle' size={20} color="white" />
                            ) : selectedAnswerIndex != null && selectedAnswerIndex === index ? (
                                <AntDesign style={{ borderColor: "#00FFF", textAlign: "center", width: 40, borderRadius: 20, height: 40, padding: 10 }} name='closecircle' size={20} color="white" />
                            ) : (
                                <><Text style={{ borderColor: "#00FFF", textAlign: "center", width: 40, borderRadius: 20, height: 40, padding: 10 }}>{index + 1}</Text><Text style={{ marginLeft: 10 }}>{item}</Text></>
                            )}
                        </Pressable >
                    ))}
                </View>
            </View>
            <Text idstyle={{ color: "black", visibility: 'hidden' }}>{data.questions[index]?.anecdote}</Text>

            <View style={answerStatus === null ? null :
                { marginTop: 45, backgroundColor: "#F0F8FF", padding: 10, borderRadius: 7, height: 120 }}>
                {answerStatus === null ? null : (
                    <Text
                        style={answerStatus === null ? null :
                            { fontSize: 17, textAlign: "center", fontWeight: "bold" }}
                    >{!!answerStatus ? "Mauvaise reponse" : "Bonne reponse"}</Text>
                )}
                {index + 1 >= data.questions.length ? (
                    <Pressable
                        onPress={() =>
                            navigation.navigate("Results", {
                                points: points,
                                answers: answers
                            })
                        }
                        style={{
                            backgroundColor: selectedAnswerIndex === currentQuestion?.réponse - 1 ? "green" : "red",
                            padding: 10,
                            marginLeft: "auto",
                            marginRight: "auto",
                            margintTop: 20,
                            borderRadius: 6
                        }}
                    >

                        <Text style={{ color: "white", fontWeight: "bold", fontSize: 25, textAlign: "center" }}>Fin</Text>

                    </Pressable>
                ) : answerStatus === null ? null : (
                    <Pressable
                        onPress={() => setIndex(index + 1)}
                        style={{
                            backgroundColor: selectedAnswerIndex === currentQuestion?.réponse - 1 ? "green" : "red",
                            padding: 10,
                            marginLeft: "auto",
                            marginRight: "auto",
                            marginTop: 20,
                            borderRadius: 6,
                        }}
                    >

                        <Text style={{ color: "white", fontWeight: "bold", fontSize: 25, textAlign: "center" }}>Prochaine question</Text>

                    </Pressable>
                )}


            </View>
        </SafeAreaView>
    )
}

export default QuizzScreen

const styles = StyleSheet.create({})