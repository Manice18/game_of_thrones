export const SINGLES = "Singles";
export const DOUBLES = "Doubles";
export const TEAM = "Team";
export const SINGLES_DOUBLES = "Singles & Doubles";

interface coordinatorType {
  name: string;
  phone: string;
}
export interface eventsType {
  id: string;
  image: string;
  hoverImage: string;
  title: string;
  description?: string;
  regFees: string;
  prize: string;
  venue: string;
  date: string;
  coordinators?: coordinatorType[];
  teamType?: "Singles" | "Team" | "Singles & Doubles";
  rules: string;
}

const events: eventsType[] = [
  {
    id: "e470c74a-77b3-4b12-ba06-95a1e6253092",
    image: "/assets/events/cricket.svg",
    hoverImage: "/assets/events/cricket2.svg",
    title: "Short Hand Cricket",
    description: "Batting, bowling, and everything in between! 🏏",
    regFees: "Rs. 1,000 /- (each team)",
    prize: "Rs. 15,000 /- ",
    venue: "RCCIIT College Ground",
    date: "12th to 14th January, 2024 ",
    teamType: "Team",
    coordinators: [
      {
        name: "Basanta Kumar Shaw",
        phone: "7547927975",
      },
      {
        name: "Soumyadip Pal",
        phone: "8617321378",
      },
      {
        name: "Tahir Imam",
        phone: "8910303288",
      },
    ],
    rules: `<!DOCTYPE html>
            <html>
            <head>
                <title>Tournament Rules</title>
            </head>
            <body>
                <ol class="flex flex-col gap-3 text-xl">
                    <li>1. A team should have a total of 8 players with a maximum of 2 reserve players.</li>
                    <li>2. Each innings will be 6 overs. A maximum of 2 bowlers can bowl a maximum of 2 overs, and every other player can bowl a maximum of 1 over.</li>
                    <li>3. Members must carry their college ID cards during the entire event.</li>
                    <li>4. All players should be from the same college.</li>
                    <li>5. Once enlisted in one team, a player cannot switch to another team.</li>
                    <li>6. Teams must be on the field at least 30 minutes prior to the scheduled game time.</li>
                    <li>7. Walkover will be given if a team delays the scheduled game time by 15 minutes.</li>
                    <li>8. Each match will be of 'knock-out' type.</li>
                    <li>9. Upon completion of the knock-out matches, semi-final & final matches will be carried out based on the expert committee decisions.</li>
                    <li>10. Sixes are not allowed. If a ball goes out of the boundary without touching the ground, then the batsman will be given out.</li>
                    <li>11. The bowler should bowl with a bent elbow from the side of their head without revolving their arm and not taking any step.</li>
                    <li>12. There is a speed limit for bowling. If it crosses that limit and the batsman appeals for it within 3 seconds and the umpire agrees, then it will be called a 'fast' ball, and the ball would be a 'NO' ball.</li>
                    <li>13. In case of a tie, there will be a super-over. If there is still a tie, it would be broken by a toss.</li>
                    <li>14. Each team should have their own equipment (e.g., bats). All types of bats are allowed.</li>
                    <li>15. Decision of the field umpire stays. Any argument with the umpire will not be tolerated.</li>
                    <li>16. Prize Money can be changed depends upon the number of Registrations.</li>
                    <li>17. Game officials have the right to modify rules as per necessity.</li>
                    <li>18. Unsporting behavior of any player may result in the direct disqualification of the team.</li>
                    <li>19. All other standard ICC rules will be applicable.</li>
                </ol>
            </body>
            </html>
            `,
  },
  {
    id: "21d118dc-a0c8-46ca-afcb-a0b5bbc24a6f",
    image: "/assets/events/badminton.svg",
    hoverImage: "/assets/events/badminton2.svg",
    title: "Badminton",
    description: "Shuttle your way to glory! 🏸",
    regFees:
      "Rs. 150 /- (Singles Boys and Girls)  ;  Rs. 250 /- (Boys Doubles)",
    prize: "Rs. 7,000 /-",
    venue: "Spuddy Badminton Academy",
    date: "20-21st January,2024",
    coordinators: [
      {
        name: "Arnab Dey",
        phone: "6291453074",
      },
      {
        name: "Atanu Biswas",
        phone: "8116335804",
      },
      {
        name: "Shreya Shome",
        phone: "8777358502",
      },
      {
        name: "Sauradip Paul",
        phone: "6289071523",
      },
    ],
    teamType: "Singles & Doubles",
    rules: `<!DOCTYPE html>
        <html>
        <head>
            <title>Tournament Rules</title>
        </head>
        <body>

            <ul class="flex flex-col gap-3 text-xl">
                <li>• Singles and double tournaments will be organized separately.</li>
                <li>• All students must carry their student-identity card.</li>
                <li>• Each match will be of "knock-out" type.</li>
                <li>• Each player should be a college student.</li>
                <li>• Shuttlecock will be provided by the tournament officials.</li>
                <li>• Each player should have their own racket.</li>
                <li>• Indiscipline towards any officials or volunteers will not be tolerated and will result in immediate disqualification.</li>
                <li>• Everyone is requested to stay in the venue during the matches for their upcoming rounds.</li>
                <li>• Fixtures will be released before the start of the tournament.</li>
                <li>• Every participant must arrive 30 minutes before the start of the tournament.</li>
                <li>• Game officials have the right to modify rules as per necessity.</li>
            </ul>
            <h3 class="text-xl font-bold underline tracking-wider py-3">Singles Boundary Rules:</h3>
            <ul class="flex flex-col gap-3 text-xl">
                <li>Sidelines: The shuttlecock must land within the inner boundary lines of the court's singles sideline.</li>
                <li>Baselines: The shuttlecock must land within the inner boundary lines of the court's singles baseline.</li>
                <li>Service Courts: During service, the shuttlecock must be hit within the diagonally opposite service court. The server must stand within the service court and hit the shuttlecock to the diagonally opposite service court. Third court service will be considered out.</li>
                <li>Mid-Court Line: During a serve, the shuttlecock must pass over the first court line without touching it. Players should not touch any of the lines on the court during a serve. This includes the feet of the server and receiver. Players can stand anywhere in their half of the court, but they cannot touch any of the lines or be outside of the playing court.</li>
            </ul>

            <h3 class="text-xl font-bold underline tracking-wider pt-2">Doubles Boundary Rules:</h3>
            <ul class="flex flex-col gap-3 text-xl py-3">
                <li><b>Sidelines:</b> Similar to singles, the shuttlecock must land within the inner boundary lines of the court's doubles sideline.</li>
                <li><b>Baselines:</b> The shuttlecock must land within the inner boundary lines of the court's doubles baseline.</li>
                <li><b>Service Courts:</b> The service must be delivered diagonally, and both service courts are in play. The server must stand within their respective service court and hit the shuttlecock to the diagonally opposite service court.</li>
                <li><b>Mid-Court Line:</b> During a serve, the shuttlecock must pass over the short service line without touching it.</li>
            </ul>
        </body>
        </html>`,
  },
  {
    id: "b56c053d-48a4-4b16-9704-caa87826a0d0",
    image: "/assets/events/chess.svg",
    hoverImage: "/assets/events/chess2.svg",
    title: "Chess",
    description: "Mind over board! ♚♛",
    regFees: "Rs. 150 /-",
    prize: "Rs. 2,500 /-",
    venue: "RCCIIT,Kolkata",
    date: "19th January,2024",
    coordinators: [
      {
        name: "Soumyadeep Chakraborty",
        phone: "6285408423",
      },
      {
        name: "Dibakar Banerjee",
        phone: "9051484336",
      },
    ],
    teamType: "Singles",
    rules: `<!DOCTYPE html>
        <html>
        <head>
            <title>Tournament Rules</title>
        </head>
        <body>
            <ul class="flex flex-col gap-3 text-xl">
                <li>• The Tournament will be in Swiss format, i.e., competitors meet one-on-one in each round and are paired using a set of rules designed to ensure that each competitor plays opponents with a similar running score but does not play the same.</li>
                <li>• Total Number of rounds will be 5.</li>
                <li>• Time control for the tournament is 15+0 in each round.</li>
                <li>• The Inauguration will start from 10AM, and the 1st round will start from 10:30 AM sharp.</li>
                <li>• Participants have to install a chess clock on their phone which will be used during gameplay.</li>
                <li>• Touch move Rule will be followed. If you touch a piece on the chessboard, you must move it. It also requires you to capture an opponent’s piece if you touch it. This rule only applies if you can make a legal move with the piece you touched.</li>
                <li>• If an illegal move is made on the board, the player will be given a warning first. But for the second time during that game, if they make another illegal move, they will lose the game.</li>
                <li>• If after all the Swiss rounds there is a tie for the 1st place, there will be a tiebreak (3 match series of blitz(3+2) or Armageddon(8 min vs 7 min) or both) depending upon the time availability. A similar rule is applicable for 2nd and 3rd place in case of ties.</li>
                <li>• All participants must carry their college ID card and Aadhaar Card.</li>
                <li>• Prize Money can be changed depending upon the number of Registrations.</li>
                <li>• All other standard FIDE rules will be applicable.</li>
                <li>• Unsporting behavior of any player may result in the direct disqualification of the team.</li>
                <li>• Game officials have the right to modify rules as per necessity.</li>
            </ul>
        </body>
        </html>
        `,
  },
  {
    id: "af2c22fc-794e-4c09-a1dc-94d80d6ba5a8",
    image: "/assets/events/carrom.svg",
    hoverImage: "/assets/events/carrom2.svg",
    title: "Carrom",
    description: "Striker, pocket, victory! 🎱",
    regFees: "Rs. 150 /- (Singles)  ;  Rs. 250 /- (Doubles)",
    prize: "Rs. 5,000 /-",
    venue: "RCCIIT College Campus",
    date: "12th & 13th January,2024",
    coordinators: [
      {
        name: "Riyan Sarkar",
        phone: "9123674274",
      },
      {
        name: "Sneha Das",
        phone: "7890813060",
      },
      {
        name: "Grantha Das",
        phone: "7278271477",
      },
      {
        name: "Suvam Chanda",
        phone: "8013513742",
      },
    ],
    teamType: "Singles & Doubles",
    rules: `<!DOCTYPE html>
        <html>
        <head>
            <title>Carrom Tournament Rules</title>
        </head>
        <body>
            <h2 class="text-2xl font-semibold py-3">General Rules:</h2>
            <ol  class="flex flex-col gap-3 text-xl">
                <li>1. All the participants must carry their own college ID Card and Aadhar Card during the entire event.</li>
                <li>2. Unsporting behavior of any player may result in direct disqualification of the team/player.</li>
                <li>3. Once enlisted, players cannot switch teams/players.</li>
            </ol>
            <h2 class="text-2xl font-semibold py-3">Game Rules:</h2>
            <div class="text-xl flex flex-col items-start gap-5">
            <div>
            <h3><b>How to Win a Match:</b></h3>
            <p>Round of 16 and Quarter-finals will be in Knockout Mode. Only one board will be played. You have to win the game to qualify for the next round. Semi-finals and Final match will be played with three (3) sets of board game. Whoever wins two sets will win the match. There will be no points calculation. Whoever finishes all of their carrommen first, legally, will win the board.</p>
            </div>
            <div>
            <h3><b>Serving First Rules:</b></h3>
            <p>Who serves first in Carrommen: Rules for serving first in a carrom board. In order to decide on the first server, you can hold a toss or use any such method.</p>
            </div>
            <div>
            <h3><b>Striking the Carrommen with Striker:</b></h3>
            <p>However, after the first turn is over, you have only one chance to strike the carrommen properly. To make the most of one’s strike, one must bear the following points in mind:</p>
            <ul>
            <li>1. The given time to strike is 15 seconds, you must hit the striker within time.</li>
            <li>2. You must place your striker either behind the baseline or on its left-ended or right-ended circle.</li>
            <li>3. Your striker should be in contact with the front and back lines of the baseline.</li>
            <li>4. Your striker should not be placed half on the baseline and half on the baseline circle. Rather, it should either be fully within the baseline or be fully within the baseline circle. In short, cutting the moon is prohibited.</li>
            <li>5. In order to make the striker cross the front part of the baseline and hit the carrommen, you ought to flick the striker with only one finger.</li>
            <li>6. You cannot flick the striker in the backward or horizontal direction.</li>
            <li>7. While attempting a stroke, you cannot let your hand or arm cross the diagonal lines that are known as foul lines.</li>
            <li>8. You are allowed three attempts to break the cluster of carrommen on your first turn.</li>
            <li>9. In case you strike and luckily pocket as well as cover the queen, you get points and retain the striker.</li>
            <li>10. After the first turn is over and the cluster of pieces/carrommen is scattered, you should neither fail to pocket your carromman nor fall prey to improper stroke. In either case, your turn will end.</li>
            </ul>
            </div>
            <div>
            <h3><b>Rules for Queen/Red Queen:</b></h3>
            <p>As per the rules of carrom board, pocketing and covering the queen have specific conditions:</p>
            <ul>
            <li>You can pocket the queen only after you have pocketed at least one of your carrommen.</li>
            <li>If, during the process of breaking the cluster of pieces, you only pocket the queen, it is returned to the center.</li>
            <li>If you pocket the queen before pocketing any of your own carrommen, the queen is returned to the center while you retain the turn.</li>
            <li>Pocketing the queen after pocketing at least one of your carrommen is considered legal.</li>
            <li>Pocketing and covering the queen simultaneously grants points, regardless of which piece enters the pocket first.</li>
            <li>If you pocket the queen but fail to cover it, the queen is returned to the center for both players/teams.</li>
            </ul>
            </div>
            <div>
            <h3><b>Carrom Board Arrow Rules:</b></h3>
            <p>Position and Role of arrows and Lines on Carrom Board. When it comes to the diagonal arrows on the board, they should not be touched by the striker while attempting a stroke. These arrows define the limits within which one must confine one’s striker.</p>
            </div>
            <div>
            <h3><b>Last Coin Rules:</b></h3>
            <p>Carrom board last coin of opponent’s rule; last coin and the queen rule A) Rule for the last coin of the opponent. When a player pockets his opponent’s last carromman onboard, he/they will lose the board. Therefore, one has to be extra vigilant in these situations and avoid striking the last carromman of one’s opponent. B) Rule for the last coin and the queen. In case a player has only one piece left, and the queen has not been pocketed yet, he can strike his last coin without any penalty; however, he cannot pocket it before the queen.</p>
            <!-- Include all the rules for the last coin and queen -->
            </div>
            <div>
            <h3><b>Position Rules:</b></h3>
            <h4>Rules for the Position of Pieces and strikers after they leave the board or get entangled. </h4>
            <p>During the course of play, some pieces and the striker may take awkward positions or may go out of the board and fall on the ground.
            Let’s see what the rules for such situations are:
            </p>
            <ul>
            <li>1. In case a piece has overtaken another piece, you cannot reposition them with bare hands. Rather you have to separate them by means of strokes.</li>
            <li>2. In case any piece, either yours or that of your opponent’s, has fallen down from the board, you can simply take that and place it in the center of the board.</li>
            <li>3. If a piece is positioned on the edge of the board, you cannot settle it with your hands. Rather, you have to consider it in play; hence, strike it with the striker.</li>
            <li>4. In case your striker is entangled under some pieces or even comes under only one piece, you can remove the striker without causing much displacement of the pieces/piece. After all, it is the striker with which you have to continue your game. </li>
            </ul>
            <!-- Include all the position rules -->
            </div>
            <div>
            <h2 class="text-2xl font-semibold py-3">Rules for Faults & Penalties :-</h2>
            <ol style="list-style:decimal;"  class="flex flex-col gap-3 text-xl list-decimal">
                <li>The time to hit striker is 15 seconds, if someone fails to hit striker within said time, he will lose his turn.</li>
                <li>When a player pockets his striker instead of his carrommen. In this case, the violator has to return one piece from his pocketed pieces and place it in the centre, and finish his turn.</li>
                <li>When a player, instead of pocketing his own carromen, pockets his opponent’s carromen, pocketed carrommen will be legal for opponent and striking player will lose his turn.</li>
                <li>After the stroke, either the striker or the carrommen fall off the board. In this case, the offender has to sacrifice his turn and place the grounded piece or striker on the board. The piece is positioned in the center, whereas the striker goes to the opponent.</li>
                <li>When a player pockets the queen and covers it with his opponent’s piece. In this situation, the queen is taken out of the pocket and placed in the center.</li>
                <li>When a player, either knowingly or unknowingly, touches any of the carrommen with his hands or any other body part, the referee will take the necessary action.</li>
                <li>In case the first server, during his first turn, misses breaking the cluster of carrommen in three attempts, opponent will get the chance to break the cluster.</li>
                <li>When a player, while making a stroke, pushes the striker rather than flicking it with his finger, the referee will take the necessary action.</li>
                <li>While attempting a stroke, you cannot let your hand or arm cross the diagonal lines that are known as foul lines.</li>
                <li>While aiming at the carrommen you can place your hand on the beats of the board , but if you don’t remove your arm while hitting you will be penalized with a fine of one carrommen of yours.</li>
                <li>You cannot hit your striker reverse, it will also be considered a penalty.</li>
            </ol>
            </div>

            </div>
        </body>
        </html>

        `,
  },
  {
    id: "00cacb70-2afa-4503-8560-3bdf14e07c5a",
    image: "/assets/events/kabaddi.svg",
    hoverImage: "/assets/events/kabaddi2.svg",
    title: "Kabaddi (boys and girls)",
    description:
      "In the realm of agility and daring raids, Kabaddi takes center stage! 🤸‍♂ ",
    regFees: "Rs. 400 /- per Team boys and girls",
    prize: "Rs. 8,000 /-",
    venue: "SAI NSEC Campus, Kolkata",
    date: "13 th & 14 th January, 2024",
    coordinators: [
      {
        name: "Harsh Jaiswal",
        phone: "7903717738",
      },
      {
        name: "Sreya Sahoo",
        phone: "7864061484",
      },
    ],
    teamType: "Team",
    rules: `<!DOCTYPE html>
        <html>
        <head>
            <title>Kabaddi Tournament Rules</title>
        </head>
        <body>
        <ul type="disc" style="margin-bottom:0cm;">
        <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><span style='font-size:19px;font-family:"Times New Roman",serif;'>A team should have a total of 10 players with 3 reserve players.</span></li>
        <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><span style='font-size:19px;font-family:"Times New Roman",serif;'>All participants must carry their valid student identity card and Aadhaar card.</span></li>
        <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><span style='font-size:19px;font-family:"Times New Roman",serif;'>All participants must be 17+ as well as a college student.</span></li>
        <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><span style='font-size:19px;font-family:"Times New Roman",serif;'>Each match will be of a Knock-out type.</span></li>
        <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><span style='font-size:19px;font-family:"Times New Roman",serif;'>Raiders must enter the opponent&apos;s half in a crouching position and make a continuous audible chant of &quot;kabaddi.&quot;</span></li>
        <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><span style='font-size:19px;font-family:"Times New Roman",serif;'>Players must complete a raid within a specified time.</span></li>
        <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><span style='font-size:19px;font-family:"Times New Roman",serif;'>A raid is valid when the raider crosses the baulk Line with the other leg on air. Each tagged defender also earns a point for the raider&apos;s team.</span></li>
        <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><span style='font-size:19px;font-family:"Times New Roman",serif;'>Not more than one raider shall be allowed inside the court of the opponent in a single round</span></li>
        <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><span style='font-size:19px;font-family:"Times New Roman",serif;'>If a player crosses the boundary line, they are out.</span></li>
        <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><span style='font-size:19px;font-family:"Times New Roman",serif;'>The game will consist of two halves, each lasting 10 minutes (may vary). There is a break of 5 minutes between the halves.</span></li>
        <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><span style='font-size:19px;font-family:"Times New Roman",serif;'>None of the antis will be allowed to touch the raider&rsquo;s court during the raid or before the raid has been completed. If any antis touch the raider&rsquo;s court before the raid has been completed, they shall be declared out and the opponent team will be rewarded.</span></li>
        <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><span style='font-size:19px;font-family:"Times New Roman",serif;'>Raiders may only be grabbed by their limbs or torso, not by their hair, clothes or anywhere else.</span></li>
        <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><span style='font-size:19px;font-family:"Times New Roman",serif;'>Bonus Point Rule- The bonus line is a specific line on the opponent&apos;s side of the court, usually located between the balk line and the end line.&nbsp;</span></li>
    </ul>
    <div style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'>
        <ul style="margin-bottom:0cm;list-style-type: disc;">
            <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'><span style='font-family:"Times New Roman",serif;font-size:14.0pt;'>Conditions for Earning a Bonus Point:&nbsp;</span></li>
        </ul>
    </div>
    <ul type="disc" style="margin-bottom:0cm;">
        <ul type="circle" style="margin-bottom:0cm;">
            <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><span style='font-size:19px;font-family:"Times New Roman",serif;'>The raider must cross the bonus line without being touched by any defenders.</span></li>
            <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><span style='font-size:19px;font-family:"Times New Roman",serif;'>There should be a minimum number of defenders on the court for the raid to be eligible for a bonus point. Typically, at least six defenders must be present on the court.</span></li>
            <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><span style='font-size:19px;font-family:"Times New Roman",serif;'>One leg must cross or cut the bonus line while the other leg must be in air.&nbsp;</span></li>
        </ul>
        <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><span style='font-size:19px;font-family:"Times New Roman",serif;'>DO OR DIE RAID: if a team has two successive Empty raids, the third raid is a Do-Or-Die raid, and failure to score in this third raid results in the raider being out and the opposite team gets a point.</span></li>
        <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><span style='font-size:19px;font-family:"Times New Roman",serif;'>SUPER TACKLE: If the defending team has three or fewer players on the ground, then with the successful tackle of a raider the team gets two points instead of one.</span></li>
        <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><span style='font-size:19px;font-family:"Times New Roman",serif;'>SUPER RAID: when a raider scores three or more points for the team in a single raid.</span></li>
        <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><span style='font-size:19px;font-family:"Times New Roman",serif;'>ALL OUT: If a team gets all seven players on the opposing team out (&quot;All Out&quot;), they earn two additional points and the players are placed back in the game.</span></li>
        <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><span style='font-size:19px;font-family:"Times New Roman",serif;'>LOBBY RULES:</span>
            <ul type="circle" style="margin-bottom:0cm;">
                <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><span style='font-size:19px;font-family:"Times New Roman",serif;'>If a raider steps out of bounds and a defender follows him, then the defender is also ruled out and the raiding team gets the point.</span></li>
                <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><span style='font-size:19px;font-family:"Times New Roman",serif;'>Lobby will be active only when contact has been made between the raider and a defender. Else, it is considered out of bounds for both raider and the defenders.</span></li>
            </ul>
        </li>
        <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><span style='font-size:19px;font-family:"Times New Roman",serif;'>Substitution is allowed during the match time.</span></li>
        <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><span style='font-size:19px;font-family:"Times New Roman",serif;'>Decisions given by the match Referee are the final decision regarding any concern.&nbsp;</span></li>
        <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><span style='font-size:19px;font-family:"Times New Roman",serif;'>Indiscipline to any officials or volunteers will not be tolerated and will be disqualified immediately.</span></li>
        <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><span style='font-size:19px;font-family:"Times New Roman",serif;'>Everyone is requested to stay in the venue during the matches for their upcoming rounds.</span></li>
        <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><span style='font-size:19px;font-family:"Times New Roman",serif;'>Fixtures will be released before the start of the tournament.</span></li>
        <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;line-height:normal;'><span style='font-size:19px;font-family:"Times New Roman",serif;'>Every participant is to arrive 30 minutes before the start of the event for their verification.</span></li>
    </ul>
    <p><span style='font-size:19px;font-family:"Times New Roman",serif;'>Cash prizes, trophies, and certificates will be distributed at the end of day of the tournament.</span></p>
        </body>
        </html>
        `,
  },
  {
    id: "5dad5c6e-4c47-429d-986f-b084d1483f76",
    image: "/assets/events/tug.svg",
    hoverImage: "/assets/events/tug2.svg",
    title: "Tug of War (boys and girls)",
    description: "Strength, strategy, and the ultimate test of teamwork! 💪🤝",
    regFees: "Rs. 400 /- (each team) boys and girls",
    prize: "Rs. 8,000 /-",
    venue: "RCCIIT College Ground",
    date: "19th January, 2024",
    coordinators: [
      {
        name: "Swastika Bose",
        phone: "7044669104",
      },
      {
        name: "Swapnil Chowdhury",
        phone: "9433936906",
      },
      {
        name: "Souvik Panda",
        phone: "9903403585",
      },
      {
        name: "Shreya Sarkar",
        phone: "7439727696",
      },
    ],
    teamType: "Team",
    rules: `<!DOCTYPE html>
        <html>
        <head>
            <title>Tug-of-War Tournament Rules</title>
        </head>
        <body>
        <ol style="list-style-type: decimal;">
        <li><span style='line-height:107%;font-family:"Times New Roman",serif;font-size:19px;'>A team should have a total of 6 players with 1 reserve player.</span></li>
        <li><span style='line-height:107%;font-family:"Times New Roman",serif;font-size:19px;'>Each match will be of Knock-out type.</span></li>
        <li><span style='line-height:107%;font-family:"Times New Roman",serif;font-size:19px;'>There will be 3 rounds in each game. The team with maximum wins will qualify to the next round.</span></li>
        <li><span style='line-height:107%;font-family:"Times New Roman",serif;font-size:19px;'>Members must carry their college ID Cards during the entire event.</span></li>
        <li><span style='line-height:107%;font-family:"Times New Roman",serif;font-size:19px;'>Playing in both sports shoes and bare foot are allowed but no spikes or strengthening kind of gear&nbsp;are&nbsp;allowed. Shoes will be check prior the match.</span></li>
        <li><span style='line-height:107%;font-family:"Times New Roman",serif;font-size:19px;'>No hand grips are allowed.</span></li>
        <li><span style='line-height:107%;font-family:"Times New Roman",serif;font-size:19px;'>Once enlisted players cannot switch the team.</span></li>
        <li><span style='line-height:107%;font-family:"Times New Roman",serif;font-size:19px;'>The rope will be divided equally and, in the middle, a red knot will be tied which will mark the middle and whichever team makes it cross their line wins the round.</span></li>
        <li><span style='line-height:107%;font-family:"Times New Roman",serif;font-size:19px;'>The rope will be tied to the anchors at the 2 ends and only anchors can wrap their hand around the rope and no other player can.</span></li>
        <li><span style='line-height:107%;font-family:"Times New Roman",serif;font-size:19px;'>Players cannot sit or lie down to pull the rope or to get balance else will be disqualified.</span></li>
        <li><span style='line-height:107%;font-family:"Times New Roman",serif;font-size:19px;'>No team can change player in the middle of the game unless someone is injured.</span></li>
        <li><span style='line-height:107%;font-family:"Times New Roman",serif;font-size:19px;'>Unsporting behaviour of any player may result in the direct disqualification of the team.</span></li>
    </ol>
        </body>
        </html>
        `,
  },
  {
    id: "deb0df56-953d-4c80-a7fc-5c0f89c0ad24",
    image: "/assets/events/football.svg",
    hoverImage: "/assets/events/football2.svg",
    title: "Football",
    description: "Kicking off the adrenaline rush! ⚽ ",
    regFees: "RS. 1500 (each team)",
    prize: "Rs. 20,000 /-",
    venue: "SAI NSEC Campus, Kolkata",
    date: "20th & 21st January, 2024",
    coordinators: [
      {
        name: "Deep Das",
        phone: "8777659627",
      },
      {
        name: "Dwaipayan Bhattacharjee",
        phone: "8017765623",
      },
      {
        name: "Pritam Das",
        phone: "8420002044",
      },
      {
        name: "Joydeep Das",
        phone: "9681162881",
      },
    ],
    teamType: "Team",
    rules: `<!DOCTYPE html>
        <html>
        <head>
            <title>Football Tournament Rules</title>
        </head>
        <body>
        <ol style="list-style-type: decimal;">
        <li><span style='line-height:107%;font-family:"Times New Roman",serif;font-size:19px;'>Each team can register a maximum of 14 with 5 reserve.</span></li>
        <li><span style='line-height:107%;font-family:"Times New Roman",serif;font-size:19px;'>The match will be of 9 - side and maximum of 4 substitutions can be made per match, including the goalkeeper.</span></li>
        <li><span style='line-height:107%;font-family:"Times New Roman",serif;font-size:19px;'>There will be offside which will be monitored by official referees.</span></li>
        <li><span style='line-height:107%;font-family:"Times New Roman",serif;font-size:19px;'>decision will be final decision, in case of argument team will be disqualified.</span></li>
        <li><span style='line-height:107%;font-family:"Times New Roman",serif;font-size:19px;'>All the teams must report 1 hour before match time.</span></li>
        <li><span style='line-height:107%;font-family:"Times New Roman",serif;font-size:19px;'>If any team fails to report before match, 5 mins will be given and after that if the other team is present, they will get automatically walk over of 1-0 scoreline.</span></li>
        <li><span style='line-height:107%;font-family:"Times New Roman",serif;font-size:19px;'>Each team must carry their own football kits along with their jersey.</span></li>
        <li><span style='line-height:107%;font-family:"Times New Roman",serif;font-size:19px;'>Aadhar card and college id card are mandatory, every player must carry.</span></li>
        <li><span style='line-height:107%;font-family:"Times New Roman",serif;font-size:19px;'>If anyone fails to show valid id card then he will not be allowed to play in the tournament.</span></li>
        <li><span style='line-height:107%;font-family:"Times New Roman",serif;font-size:19px;'>Fake id card will result in disqualification of the team.</span></li>
        <li><span style='line-height:107%;font-family:"Times New Roman",serif;font-size:19px;'>Only college students are allowed to play in this tournament no outside players will be allowed.</span></li>
        <li><span style='line-height:107%;font-family:"Times New Roman",serif;font-size:19px;'>Merging of team is prohibited in the later stages of the game.</span></li>
        <li><span style='line-height:107%;font-family:"Times New Roman",serif;font-size:19px;'>Spot registration is not allowed.</span></li>
        <li><span style='line-height:107%;font-family:"Times New Roman",serif;font-size:19px;'>Tournament will be of 16 teams in knock-out format.</span></li>
        <li><span style='line-height:107%;font-family:"Times New Roman",serif;font-size:19px;'>There will be penalty shootout in case of draw in all matches including semifinal and final.</span></li>
        <li><span style='line-height:107%;font-family:"Times New Roman",serif;font-size:19px;'>The match will be of 15-5-15 minutes duration.</span></li>
    </ol>
        </body>
        </html>
        `,
  },
  {
    id: "ae4a5c82-d6ae-4772-be7a-e45ea51d5919",
    image: "/assets/events/tt.svg",
    hoverImage: "/assets/events/tt2.svg",
    title: "Table Tennis",
    description: "Ping, pong, perfection! 🏓 ",
    regFees: "Rs. 100 /- (Singles)  ;  Rs. 200 /- (Doubles)",
    prize: "Rs. 5,000 /-",
    venue: "SAI NSEC Campus, Kolkata",
    date: "13th January, 2024",
    coordinators: [
      {
        name: "Subhranil Saha",
        phone: "8101696445",
      },
      {
        name: "Debasmita Dey",
        phone: "6291145072",
      },
      {
        name: "Souvik Mandal",
        phone: "9330613148",
      },
    ],
    teamType: "Singles & Doubles",
    rules: `<!DOCTYPE html>
        <html>
        <head>
            <title>Tournament Rules and Regulations</title>
        </head>
        <body>
        <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'><span style='font-size:19px;line-height:107%;font-family:"Times New Roman",serif;'>&bull; Singles and doubles tournaments will be organized separately.</span></p>
        <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'><span style='font-size:19px;line-height:107%;font-family:"Times New Roman",serif;'>&bull; All participants must carry their student-identity card and Aadhaar card.</span></p>
        <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'><span style='font-size:19px;line-height:107%;font-family:"Times New Roman",serif;'>&bull; Each player should be a college student.</span></p>
        <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'><span style='font-size:19px;line-height:107%;font-family:"Times New Roman",serif;'>&bull; All participants must be 17+.</span></p>
        <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'><span style='font-size:19px;line-height:107%;font-family:"Times New Roman",serif;'>&bull; Each match will be of Knock-out type.</span></p>
        <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'><span style='font-size:19px;line-height:107%;font-family:"Times New Roman",serif;'>&bull; Ball will be provided by the tournament officials.</span></p>
        <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'><span style='font-size:19px;line-height:107%;font-family:"Times New Roman",serif;'>&bull; Everyone is requested to carry their own rackets.</span></p>
        <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'><span style='font-size:19px;line-height:107%;font-family:"Times New Roman",serif;'>&bull; Everyone is requested not to litter the venue.</span></p>
        <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'><span style='font-size:19px;line-height:107%;font-family:"Times New Roman",serif;'>&bull; Intentional damages to any equipment will not be tolerated and will be</span></p>
        <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'><span style='font-size:19px;line-height:107%;font-family:"Times New Roman",serif;'>compensated.</span></p>
        <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'><span style='font-size:19px;line-height:107%;font-family:"Times New Roman",serif;'>&bull; Indiscipline to any officials or volunteers will not be tolerated and will be</span></p>
        <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'><span style='font-size:19px;line-height:107%;font-family:"Times New Roman",serif;'>disqualified immediately.</span></p>
        <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'><span style='font-size:19px;line-height:107%;font-family:"Times New Roman",serif;'>&bull; Everyone is requested to stay in the venue while the matches for their</span></p>
        <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'><span style='font-size:19px;line-height:107%;font-family:"Times New Roman",serif;'>upcoming rounds.</span></p>
        <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'><span style='font-size:19px;line-height:107%;font-family:"Times New Roman",serif;'>&bull; Rules of the game will be followed according to the official rules of</span></p>
        <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'><span style='font-size:19px;line-height:107%;font-family:"Times New Roman",serif;'>WTTF.</span></p>
        <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'><span style='font-size:19px;line-height:107%;font-family:"Times New Roman",serif;'>&bull; Fixtures will be released before the start of the tournament.</span></p>
        <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'><span style='font-size:19px;line-height:107%;font-family:"Times New Roman",serif;'>&bull; Every participant is to arrive 30 mins before start of the event for their</span></p>
        <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'><span style='font-size:19px;line-height:107%;font-family:"Times New Roman",serif;'>verification.</span></p>
        <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri",sans-serif;'><span style='font-size:19px;line-height:107%;font-family:"Times New Roman",serif;'>&bull; Cash prizes, trophies and certificates will be distributed at the end of day</span></p>
        <p><span style='font-size:19px;font-family:"Times New Roman",serif;'>of the tournament.</span></p>
        </body>
        </html>
        `,
  },
  {
    id: "8363dae3-e65b-4dbb-ab90-ec24ee395692",
    image: "/assets/events/handball.svg",
    hoverImage: "/assets/events/handball2.svg",
    title: "Handball (girls)",
    description: "Fast-paced, dynamic, and full of twists! 🤾‍♀",
    regFees: "Rs. 250 /- (each team) girls",
    prize: "Rs. 2,000 /-",
    venue: "RCCIIT College Middle Ground , Kolkata",
    date: "19th January, 2024",
    coordinators: [
      {
        name: "Ankita Naskar",
        phone: "9073569808",
      },
      {
        name: "Srinanda Das",
        phone: "7980505034",
      },
      {
        name: "Pritha Majumder",
        phone: "7586909097",
      },
      {
        name: "Ankuri Sen",
        phone: "9903290308",
      },
    ],
    teamType: "Team",
    rules: `<!DOCTYPE html>
        <html>
        <head>
            <title>Basketball Tournament Rules</title>
        </head>
        <body>
            <ol  class="flex flex-col gap-3 text-xl">
                <li>1. Each team should have a total of 7 players with 2 reserve players (optional).</li>
                <li>2. Each match will be of Knock-out type.</li>
                <li>3. Only 5 players on the floor at any given time (4 players + 1 goalkeeper).</li>
                <li>4. All students must carry their student-identity card and Aadhaar card.</li>
                <li>5. Each player should be a college student.</li>
                <li>6. Points are scored when the opponent scores a goal.</li>
                <li>7. The match will start with one drop by the referee.</li>
                <li>8. Each match will have 2 halves, and each half will be of 15 minutes (total 30 minutes). A break of 2 minutes will be given after the 1st half.</li>
                <li>9. <b>For a tie:</b>
                    <ul class="flex flex-col gap-3 text-xl">
                        <li>• Overtime of 5 minutes.</li>
                        <li>• If the match remains tied, a penalty shootout will occur (players cannot move while shooting the ball).</li>
                        <li>• If the match remains tied even after the shootout, a toss by the referee will determine the winner.</li>
                    </ul>
                </li>
                <li>10. Players can touch the ball with any part of their body above the knees.</li>
                <li>11. Only the goalkeeper is allowed in the goal crease (D-box), and other players cannot touch the ball when it is on the ground in the goal crease.</li>
                <li>12. <b>For Fouls/Free Throw/Penalty Throw/Throw-in:</b>
                    <ul class="flex flex-col gap-3 text-xl">
                        <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; • If defending team member(s) enter the goal crease (D-box), the opponent gets a free throw.</li>
                        <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• <b>Ball possession:</b> Players can take 3 steps while dribbling the ball or hold the ball for up to 3 seconds before passing. Violating this rule results in a referee-initiated restart with one drop.</li>
                        <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• <b>Dribble fault:</b> Restart the game from the point of the event with one drop by the referee.</li>
                        <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Players may not touch the ball more than once, except if it touches the ground, another player, or a goal post.</li>
                        <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Snatching the ball with hands or violent striking/tackling results in a free throw for the opponent.</li>
                        <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• <b>Out of bounds:</b> If the entire ball crosses the sideline, the team that last touched the ball loses possession, and the other team gets a throw-in.</li>
                        <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• If the ball touches anywhere below the knee, the game restarts with one drop by the referee from that place.</li>
                    </ul>
                </li>
                <li>13. Intentional damages to any equipment will not be tolerated and will be compensated.</li>
                <li>14. Indiscipline towards any officials or volunteers will not be tolerated and will result in immediate disqualification.</li>
            </ol>
        </body>
        </html>
        `,
  },
  {
    id: "48319762-6743-4bef-be27-303d53feb018",
    image: "/assets/events/volleyball.svg",
    hoverImage: "/assets/events/volleyball2.svg",
    title: "Volleyball (boys)",
    description: "Spike it, set it, win it! 🏐",
    regFees: "Rs. 500 /- (each team)",
    prize: "Rs. 4,500 /-",
    venue: "SAI NSEC Campus, Kolkata",
    date: "14th January, 2024",
    coordinators: [
      {
        name: "Subhasis Ghosh",
        phone: "8145520227",
      },
      {
        name: "Subhodip Chakraborty",
        phone: "8370874299",
      },
      {
        name: "Piyush Prasad",
        phone: "8910170643",
      },
      {
        name: "Indranil Lohar",
        phone: "8240574541",
      },
    ],
    teamType: "Team",
    rules: `<!DOCTYPE html>
        <html>
        <head>
            <title>Volleyball Tournament Rules</title>
        </head>
        <body>
        <ol style="list-style-type: decimal;">
        <li><span style='line-height:107%;font-family:"Times New Roman",serif;font-size:19px;'>A team should have a total of 8 players with 2 reserve players.</span></li>
        <li><span style='line-height:107%;font-family:"Times New Roman",serif;font-size:19px;'>Each match will be of Knock-out type.</span></li>
        <li><span style='line-height:107%;font-family:"Times New Roman",serif;font-size:19px;'>Only 6 players on the floor at any given time: 3 in the front row and 3 in the back row.</span></li>
        <li><span style='line-height:107%;font-family:"Times New Roman",serif;font-size:19px;'>All students must carry their student-identity card and Aadhaar card.</span></li>
        <li><span style='line-height:107%;font-family:"Times New Roman",serif;font-size:19px;'>Each player should be a college student.</span></li>
        <li><span style='line-height:107%;font-family:"Times New Roman",serif;font-size:19px;'>Points are made on every serve for the winning team of the rally (rally-point scoring).</span></li>
        <li><span style='line-height:107%;font-family:"Times New Roman",serif;font-size:19px;'>Players may not hit the ball twice in succession (a block is not considered a hit).</span></li>
        <li><span style='line-height:107%;font-family:"Times New Roman",serif;font-size:19px;'>Ball may be played off the net during a volley and on a serve.</span></li>
        <li><span style='line-height:107%;font-family:"Times New Roman",serif;font-size:19px;'>A ball hitting a boundary line is in.</span></li>
        <li><span style='line-height:107%;font-family:"Times New Roman",serif;font-size:19px;'>A ball is out if it hits an antennae, the floor completely outside the court, any of the net or cables outside the antennae, the referee stand or pole, or the ceiling above a non-playable area.</span></li>
        <li><span style='line-height:107%;font-family:"Times New Roman",serif;font-size:19px;'>It is legal to contact the ball with any part of a player&rsquo;s body.</span></li>
        <li><span style='line-height:107%;font-family:"Times New Roman",serif;font-size:19px;'>It is illegal to catch, hold or throw the ball.</span></li>
        <li><span style='line-height:107%;font-family:"Times New Roman",serif;font-size:19px;'>A player cannot block or attack a serve from on or inside the 10-foot line.</span></li>
        <li><span style='line-height:107%;font-family:"Times New Roman",serif;font-size:19px;'>After the serve, front-line players may switch positions at the net.</span></li>
        <li><span style='line-height:107%;font-family:"Times New Roman",serif;font-size:19px;'>Matches are made up of sets; the number depends on level of play.</span></li>
        <li><span style='line-height:107%;font-family:"Times New Roman",serif;font-size:19px;'>Intentional damages to any equipment will not be tolerated and will be compensated.</span></li>
        <li><span style='line-height:107%;font-family:"Times New Roman",serif;font-size:19px;'>Indiscipline to any officials or volunteers will not be tolerated and will be disqualified immediately.</span></li>
        <li><span style='line-height:107%;font-family:"Times New Roman",serif;font-size:19px;'>If the number of teams is very low, then the prize money can be deducted.</span></li>
    </ol>
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:36.0pt;font-size:11.0pt;font-family:"Calibri",sans-serif;'><span style='font-size:19px;line-height:107%;font-family:"Times New Roman",serif;'>&nbsp;</span></p>
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:18.0pt;font-size:11.0pt;font-family:"Calibri",sans-serif;'><strong><u><span style='font-size:19px;line-height:107%;font-family:"Times New Roman",serif;'>Committing any of these volleyball rule violations results in a point for the opponent.</span></u></strong></p>
    <ul style="list-style-type: disc;margin-left:44px;">
        <li><span style='line-height:107%;font-family:"Times New Roman",serif;font-size:19px;'>Stepping on or across the service line when serving while making contact with the ball.</span></li>
        <li><span style='line-height:107%;font-family:"Times New Roman",serif;font-size:19px;'>Failure to serve the ball over the net successfully.</span></li>
        <li><span style='line-height:107%;font-family:"Times New Roman",serif;font-size:19px;'>Ball-handling errors and contacting the ball illegally (double touching, lifting, carrying, throwing, etc.)</span></li>
        <li><span style='line-height:107%;font-family:"Times New Roman",serif;font-size:19px;'>Touching the net with any part of the body while the ball is in play.</span></li>
        <li><span style='line-height:107%;font-family:"Times New Roman",serif;font-size:19px;'>Blocking a ball coming from the opponent&rsquo;s court and contacting the ball when reaching over the net if your opponent has not used 3 contacts AND has a player there to make a play on the ball.</span></li>
        <li><span style='line-height:107%;font-family:"Times New Roman",serif;font-size:19px;'>Attacking a ball coming from the opponent&rsquo;s court and contacting the ball when reaching over the net when the ball has not yet broken the vertical plane of the net.</span></li>
        <li><span style='line-height:107%;font-family:"Times New Roman",serif;font-size:19px;'>Crossing the court centerline with any part of your body, with the exception of a hand or foot. It is only considered a violation if the entire hand or entire foot crosses the court centerline.</span></li>
        <li><span style='line-height:107%;font-family:"Times New Roman",serif;font-size:19px;'>Serving out of rotation or out of order.</span></li>
        <li><span style='line-height:107%;font-family:"Times New Roman",serif;font-size:19px;'>Back row player blocking (deflecting a ball coming from the opponent) when, at the moment of contact, the back row player is near the net and has part of their body above the top of the net. This is an illegal block.</span></li>
    </ul>
    <p><span style='font-size:19px;font-family:"Times New Roman",serif;'>Back row player attacking a ball inside the front zone (the area inside the 3M/10-foot line) when, at the moment of contact, the ball is completely above the net. This is an illegal attack.</span></p>
        </body>
        </html>
        `,
  },
];

export default events;
