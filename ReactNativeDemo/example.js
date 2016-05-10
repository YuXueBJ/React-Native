import React, {
	AppRegistry,
	Component,
	ListView,
	StyleSheet,
	Text,
	Alert,
	TouchableOpacity,
	TouchableHighlight,
	View
} from 'react-native';

import { SwipeListView, SwipeRow } from './SlideListView/components';

const dataSource = Array(20).fill('').map((_,i)=>`item #${i}`);

class App extends Component {
	
	constructor(props) {
		super(props);
		this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		let isOpenRow = false;
	}
   
	onRowPress() {
		if(!isOpenRow){
		  Alert.alert('点击row');
		}
		 isOpenRow = !isOpenRow;
	}
	onRowOpen(data) {
		 Alert.alert('滑开row');
		 isOpenRow = true;
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.standalone}>
					<SwipeRow
						leftOpenValue={75}
						rightOpenValue={-150}
						disableRightSwipe={true}
						onRowOpen={ _ => this.onRowOpen()}
						onRowPress={ _ => this.onRowPress() }
					>
					  <View style={styles.standaloneRowBack}>
					  		<View style={{flex: 1,backgroundColor: 'red'}}>
							 </View>
							 <View style={styles.RightViewCss}>
							    <Text style={styles.backTextWhite}>编辑</Text>
								<Text style={styles.backTextWhite}>删除</Text>
							 </View>
					</View>
					<View style={styles.standaloneRowFront}>
							<Text>滑动我试试</Text>
					</View>
				
			  </SwipeRow>

		  
				<SwipeRow
						leftOpenValue={75}
						rightOpenValue={-75}
					>
					  <View style={styles.standaloneRowBack}>
						   <Text style={styles.backTextWhite}>左边</Text>
						   <Text style={styles.backTextWhite}>右边</Text>
					</View>
					<View style={styles.standaloneRowFront}>
							<Text>滑动我试试</Text>
					</View>
					</SwipeRow>
				</View>

			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		flex: 1
		
	},
	standalone: {
		marginTop: 50,
		marginBottom: 50,
	},
	standaloneRowFront: {
		alignItems: 'center',
		backgroundColor: '#CCC',
		justifyContent: 'center',
		height: 50,
	},
	standaloneRowBack: {
		alignItems: 'center',
		backgroundColor: '#55ACEE',
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 15
	},
	backTextWhite: {
		color: '#FFF',
		padding: 15
	},
	rowFront: {
		alignItems: 'center',
		backgroundColor: '#CCC',
		borderBottomColor: 'black',
		borderBottomWidth: 1,
		justifyContent: 'center',
		height: 50,
	},
	rowBack: {
		alignItems: 'center',
		backgroundColor: '#DDD',	
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingLeft: 15,
	},
	backRightBtn: {
		alignItems: 'center',
		bottom: 0,
		justifyContent: 'center',
		position: 'absolute',
		top: 0,
		width: 75
	},
	backRightBtnLeft: {
		backgroundColor: 'blue',
		right: 75
	},
	backRightBtnRight: {
		backgroundColor: 'red',
		right: 0
	},
	RightViewCss:{
		alignItems: 'flex-end',
		flex: 1,
		justifyContent: 'flex-end',
		padding: 0,
		flexDirection: 'row',
		height: 50,
	}
});

export default App;


/*

				<SwipeListView
					dataSource={this.ds.cloneWithRows(dataSource)}
					renderRow={ data => (
						<TouchableHighlight
							onPress={ _ => console.log('You touched me') }
							style={styles.rowFront}
							underlayColor={'#AAA'}
						>
							<View>
								<Text>I'm {data} in a SwipeListView</Text>
							</View>
						</TouchableHighlight>
					)}
					renderHiddenRow={ (data, secId, rowId, rowMap) => (
						<View style={styles.rowBack}>
							<Text>Left</Text>
							<View style={[styles.backRightBtn, styles.backRightBtnLeft]}>
								<Text style={styles.backTextWhite}>Right1</Text>
							</View>
							<TouchableOpacity style={[styles.backRightBtn, styles.backRightBtnRight]} onPress={ _ => rowMap[rowId].closeRow() }>
								<Text style={styles.backTextWhite}>Right2</Text>
							</TouchableOpacity>
						</View>
					)}
					leftOpenValue={75}
					rightOpenValue={-150}
				/>

*/ 