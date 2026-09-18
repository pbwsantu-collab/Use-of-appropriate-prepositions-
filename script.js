/* ============================================================
   DATA
   w = word/phrase, p = preposition(s) â€” "/" separates accepted alternatives
   e = example sentence containing the preposition
   g = short English gloss (optional)
   bn = Bengali meaning (optional) â€” shown in à¦¬à¦¾à¦‚à¦²à¦¾ / Mixed mode
   ============================================================ */
const DATA = [
{w:"Abhorrent",p:"to",e:"Wine is abhorrent to him.",g:"hateful",bn:"à¦˜à§ƒà¦£à§à¦¯ / à¦…à¦¸à¦¹à§à¦¯"},
{w:"Abide",p:"by",e:"I shall abide by your decision.",g:"comply with",bn:"à¦®à§‡à¦¨à§‡ à¦šà¦²à¦¾ / à¦ªà¦¾à¦²à¦¨ à¦•à¦°à¦¾"},
{w:"Abound",p:"in/with",e:"Indian forests abound in wild animals.",g:"be full of",bn:"à¦ªà¦°à¦¿à¦ªà§‚à¦°à§à¦£ à¦¹à¦“à¦¯à¦¼à¦¾ / à¦­à¦°à¦ªà§à¦°"},
{w:"Absent",p:"from",e:"He was absent from the meeting.",bn:"à¦…à¦¨à§à¦ªà¦¸à§à¦¥à¦¿à¦¤"},
{w:"Absolve",p:"from",e:"I absolve you from blame.",bn:"à¦¦à§‹à¦· à¦¥à§‡à¦•à§‡ à¦®à§à¦•à§à¦¤ à¦•à¦°à¦¾"},
{w:"Absorbed",p:"in",e:"He is absorbed in thought.",g:"deeply engaged",bn:"à¦®à¦—à§à¦¨ / à¦¨à¦¿à¦®à¦—à§à¦¨"},
{w:"Abstain",p:"from",e:"I shall abstain from smoking.",bn:"à¦¬à¦¿à¦°à¦¤ à¦¥à¦¾à¦•à¦¾"},
{w:"Accede",p:"to",e:"I cannot accede to your request.",g:"agree",bn:"à¦¸à¦®à§à¦®à¦¤ à¦¹à¦“à¦¯à¦¼à¦¾ / à¦®à§‡à¦¨à§‡ à¦¨à§‡à¦“à¦¯à¦¼à¦¾"},
{w:"Access",p:"to",e:"We have free access to him."},
{w:"Accessible",p:"to",e:"He is accessible to all."},
{w:"Accompanied",p:"by/with",e:"I was accompanied there by my friend."},
{w:"Accord",p:"with",e:"Your story accords with his.",g:"agree"},
{w:"According",p:"to",e:"According to your orders I went there."},
{w:"Account",p:"for",e:"You have to account for our deeds.",g:"explain"},
{w:"Accountable",p:"to/for",e:"I am accountable to God for this money."},
{w:"Accrue",p:"to",e:"Great benefit will accrue to the country."},
{w:"Accurate",p:"in",e:"He is very accurate in his prediction."},
{w:"Accused",p:"of",e:"He is accused of theft."},
{w:"Accustomed",p:"to",e:"He was very accustomed to such a life."},
{w:"Acquainted",p:"with",e:"I am acquainted with him."},
{w:"Acquiesce",p:"in",e:"I acquiesced in the proposal."},
{w:"Acquit",p:"of",e:"I acquit you of the charge."},
{w:"Adapted",p:"to/for",e:"This story is adapted for school boys."},
{w:"Addicted",p:"to",e:"He is addicted to wine."},
{w:"Adept",p:"in/at",e:"He is very adept in music.",g:"proficient"},
{w:"Adequate",p:"to",e:"This amount is adequate to our wants."},
{w:"Adhere",p:"to",e:"I still adhere to my plan.",g:"stick"},
{w:"Adjacent",p:"to",e:"His house is adjacent to mine.",g:"close"},
{w:"Admit",p:"of",e:"Your conduct admits of no excuse."},
{w:"Advantage",p:"over",e:"He took advantage over me in the room."},
{w:"Adverse",p:"to",e:"The new rule is adverse to us.",g:"opposed"},
{w:"Affection",p:"for/towards",e:"He has affection for or towards me."},
{w:"Affiliated",p:"to/with",e:"The college is affiliated to the University."},
{w:"Affinity",p:"between/with",e:"There is an affinity between the two languages."},
{w:"Afflicted",p:"with",e:"He is afflicted with a disease."},
{w:"Afraid",p:"of",e:"I am afraid of him."},
{w:"Aggrieved",p:"at/by",e:"He is aggrieved by the terms of his father's will."},
{w:"Agree",p:"with/to/on",e:"I agree with you on this proposal."},
{w:"Agreeable",p:"to",e:"The climate of this place is agreeable to me."},
{w:"Aim",p:"at",e:"My feeling for him is aimed at the flying bird."},
{w:"Akin",p:"to",e:"His feeling for him is akin to pity."},
{w:"Alarmed",p:"at/by",e:"We are alarmed at or by the news."},
{w:"Alien",p:"to",e:"Such rudeness is alien to his nature.",g:"foreign"},
{w:"Alienated",p:"from",e:"He has been alienated from his friend.",g:"separated"},
{w:"Alighted",p:"from/at/on",e:"He alighted from the car at the park."},
{w:"Align",p:"with",e:"The people aligned with the police to fight the dacoits."},
{w:"Alive",p:"to",e:"I am alive to my danger.",g:"conscious of"},
{w:"Allegiance",p:"to",e:"You must show allegiance to your leader."},
{w:"Allied",p:"to/with",e:"England has formed an alliance with France."},
{w:"Allocated",p:"to",e:"The money was allocated to the club."},
{w:"Allotted",p:"to",e:"Fifty shares were allotted to me."},
{w:"Alluded",p:"to",e:"He alluded to the same nature as that of the company."},
{w:"Aloof",p:"from",e:"Keep aloof from such friends."},
{w:"Alternate",p:"with",e:"Light alternates with darkness in the story."},
{w:"Alternative",p:"to",e:"This question is an alternative to that."},
{w:"Amazed",p:"at",e:"I am amazed at your conduct."},
{w:"Ambitious",p:"of",e:"I am not ambitious of fame."},
{w:"Amenable",p:"to",e:"He is not amenable to reason."},
{w:"Amount",p:"to",e:"What does the total amount to?"},
{w:"Amused",p:"at/by/with",e:"I am amused at or by his story."},
{w:"Analogous",p:"to/with",e:"The teacher explained an analogy between the human heart and a pump."},
{w:"Angry",p:"with/at",e:"He is angry with me for opposing him. He was angry at my opposition."},
{w:"Annexed",p:"to",e:"Annex this slip to the letter."},
{w:"Annoyed",p:"with/at",e:"He was annoyed with me for going there."},
{w:"Answerable",p:"to/for",e:"You are answerable to the teacher for your conduct."},
{w:"Antecedent",p:"to",e:"The antecedents to the person are being examined."},
{w:"Antidote",p:"to",e:"What is the antidote to this poison?"},
{w:"Antipathy",p:"to/against",e:"I have an antipathy to smoking."},
{w:"Anxious",p:"about/for",e:"I am anxious about the result."},
{w:"Apart",p:"from",e:"Apart from the house in Kolkata, I have a farm house."},
{w:"Apathy",p:"towards",e:"He has a great apathy towards his studies."},
{w:"Apologise",p:"to/for",e:"You must apologise to him for your conduct."},
{w:"Appeal",p:"to/for/against",e:"I appealed to him for help. I shall appeal against your decision."},
{w:"Appended",p:"to",e:"The appendix is appended to the main chapter."},
{w:"Appetite",p:"for",e:"I have no appetite for food."},
{w:"Applicable",p:"to",e:"Is the rule applicable to your case?"},
{w:"Apply",p:"to/for",e:"I applied to him for the post."},
{w:"Appointed",p:"to/for",e:"He was appointed to the post."},
{w:"Apprehensive",p:"of",e:"I am apprehensive of failure."},
{w:"Apprised",p:"of",e:"We were duly apprised of the event."},
{w:"Appropriate",p:"to",e:"Your remark is not appropriate to the occasion."},
{w:"Approve",p:"of",e:"I approve of your action."},
{w:"Apt",p:"in/at",e:"He is apt in mathematics."},
{w:"Aptitude",p:"for",e:"I have no aptitude for music."},
{w:"Argue",p:"with/about",e:"I do not want to argue with you about this."},
{w:"Arrive",p:"at",e:"They ultimately arrived at a conclusion."},
{w:"Ascribe",p:"to",e:"Don't ascribe any motive to my action."},
{w:"Ashamed",p:"of",e:"I am ashamed of your conduct."},
{w:"Ask",p:"for",e:"He asked me for a loan."},
{w:"Aspire",p:"to/after",e:"I do not aspire to a high post."},
{w:"Aspirant",p:"to",e:"My friend is an aspirant to the post of Principal."},
{w:"Aspiration",p:"for/after",e:"He has no aspiration for riches."},
{w:"Assent",p:"to",e:"I assented to the proposal."},
{w:"Assigned",p:"to",e:"He assigned the task to me."},
{w:"Assist",p:"in",e:"I assisted him in his duties."},
{w:"Associated",p:"with",e:"He was associated with you in the proposal."},
{w:"Assure",p:"of",e:"He assured me of his help."},
{w:"Astonished",p:"at",e:"I was astonished at your courage."},
{w:"Atone",p:"for",e:"You must atone for your sin."},
{w:"Attach",p:"to",e:"Attach this slip to the letter."},
{w:"Attachment",p:"for",e:"I have an attachment for the children."},
{w:"Attacked",p:"by",e:"He was attacked by robbers on the way."},
{w:"Attain",p:"to",e:"He attained to greatness by dint of perseverance."},
{w:"Attend",p:"to/upon",e:"Attend to what he says."},
{w:"Attended",p:"by",e:"He was attended by his servants."},
{w:"Attention",p:"to",e:"Give attention to what he says."},
{w:"Attribute",p:"to",e:"He attributed the loss to me."},
{w:"Attuned",p:"to",e:"Their minds were attuned to the music."},
{w:"Authority",p:"on/over",e:"He is an authority on politics."},
{w:"Avail",p:"of",e:"I availed myself of his help."},
{w:"Available",p:"to",e:"The records are available to the auditors."},
{w:"Avenge",p:"on",e:"He will avenge himself on his enemy."},
{w:"Averse",p:"to",e:"He is averse to work."},
{w:"Aversion",p:"to",e:"Do you feel any aversion to mixing with them?"},
{w:"Aware",p:"of",e:"He is aware of the fact."},
{w:"Bar",p:"to",e:"There is no bar to his trying for the post."},
{w:"Bare",p:"of",e:"The field is bare of grass."},
{w:"Bark",p:"at",e:"The dog barked at us."},
{w:"Bear",p:"with",e:"Please bear with me and listen to what I say."},
{w:"Based",p:"on",e:"What he says is based on truth."},
{w:"Beg",p:"for/of",e:"He begged me for the favour."},
{w:"Behave",p:"towards",e:"Behave kindly towards the poor."},
{w:"Believe",p:"in",e:"I do not believe in what he says."},
{w:"Belong",p:"to",e:"This book belongs to me."},
{w:"Beneficial",p:"to",e:"Exercise is beneficial to health."},
{w:"Bent",p:"on",e:"He is bent on going."},
{w:"Bequeath",p:"to",e:"He bequeathed his all to me."},
{w:"Bereft",p:"of",e:"He is bereft of children.",g:"deprived"},
{w:"Beset",p:"with",e:"He is beset with dangers.",g:"surrounded"},
{w:"Bestow",p:"on",e:"May God bestow His blessings on you."},
{w:"Beware",p:"of",e:"Beware of the enemy."},
{w:"Bias",p:"against",e:"I have no bias against him.",g:"prejudice"},
{w:"Blessed",p:"with",e:"He is blessed with good health."},
{w:"Blind",p:"to",e:"He is blind to his son's faults."},
{w:"Blush",p:"at/for",e:"He blushed with shame at his success."},
{w:"Boast",p:"of",e:"Do not boast of your wealth."},
{w:"Border",p:"on",e:"Your conduct borders on cruelty."},
{w:"Born",p:"of/in",e:"He was born of poor parents."},
{w:"Borrow",p:"from",e:"I borrowed the amount from him."},
{w:"Bound",p:"for/by/in",e:"He is bound for England. I am bound by contract to pay the money."},
{w:"Bow",p:"to",e:"You should bow to your superiors."},
{w:"Brood",p:"over",e:"Do not brood over your misfortune."},
{w:"Bully",p:"into",e:"Don't let anyone bully you into signing the document."},
{w:"Burdened",p:"with",e:"He is burdened with a big family."},
{w:"Burst",p:"into/out",e:"He burst into tears at the sad news."},
{w:"Busy",p:"with/at/in",e:"He is busy with his lessons."},
{w:"Buy",p:"of/from",e:"I bought this thing of him, but bought this from his shop."},
{w:"Callous",p:"to",e:"He is callous to my suffering.",g:"indifferent"},
{w:"Capable",p:"of",e:"He is not capable of hard work."},
{w:"Capacity",p:"for",e:"He has no capacity for hard work."},
{w:"Care",p:"for/about/of",e:"Take care of your health."},
{w:"Careful",p:"of/about",e:"He is careful of or about his health."},
{w:"Cater",p:"for/to",e:"The dispensary was set up to cater for the needs of the people."},
{w:"Cause",p:"of/for",e:"What is the cause of your failure? There is no cause for anxiety."},
{w:"Cautious",p:"of",e:"He is cautious of giving offence."},
{w:"Caution",p:"against",e:"Take proper caution against malaria."},
{w:"Certain",p:"of",e:"I am certain of it."},
{w:"Certify",p:"to",e:"I certify to his honesty."},
{w:"Characterised",p:"by",e:"His plans are characterised by boldness."},
{w:"Charge",p:"against/of/with",e:"What is the charge against him? He was charged with theft."},
{w:"Cheat",p:"of/out of",e:"He was cheated of his dues."},
{w:"Claim",p:"to/for",e:"I have no claim to this money. His claim for damage was accepted."},
{w:"Clamour",p:"for",e:"The people are clamouring for more autonomy."},
{w:"Clear",p:"of",e:"Keep clear of wicked friends."},
{w:"Cling",p:"to",e:"He clung to me through my troubles."},
{w:"Close",p:"to",e:"His house is close to mine."},
{w:"Clothed",p:"with/in",e:"She was clothed in white."},
{w:"Clue",p:"to",e:"Find out the clue to the mystery."},
{w:"Cognizant",p:"of",e:"We were not cognizant of the full facts of the case."},
{w:"Coincide",p:"with",e:"Your story coincides with his."},
{w:"Collaborate",p:"with",e:"The people collaborated with the police in rounding up the dacoits."},
{w:"Collide",p:"with",e:"The lorry collided with the car."},
{w:"Combine",p:"with",e:"Hydrogen combines with oxygen to form water."},
{w:"Commence",p:"on/with",e:"He commenced his speech with a short prayer."},
{w:"Commensurate",p:"with",e:"His pay is not commensurate with his qualifications."},
{w:"Comment",p:"upon/on",e:"Do not make any comment on this issue."},
{w:"Commit",p:"to",e:"Commit the passage to memory."},
{w:"Committed",p:"to",e:"The President is committed to reforming health care."},
{w:"Common",p:"to",e:"This angle is common to both the triangles."},
{w:"Communicate",p:"with/to",e:"I shall communicate with him on this matter."},
{w:"Compare",p:"with/to",e:"Compare Akbar with Aurangzeb. Anger is compared to fire."},
{w:"Compatible",p:"with",e:"Drive the car at a speed compatible with safety."},
{w:"Compensate",p:"for/with",e:"I compensated him for his loss."},
{w:"Competent",p:"for",e:"You are not competent for the post."},
{w:"Compete",p:"with/for",e:"He competed with me for the post."},
{w:"Complacent",p:"about",e:"You should not be complacent about your exam result."},
{w:"Complain",p:"to/against/of",e:"He complained to me against you. He complained of headache."},
{w:"Comply",p:"with",e:"He complied with my request."},
{w:"Composed",p:"of",e:"What is water composed of?"},
{w:"Compromise",p:"with/on",e:"I cannot compromise with persons holding opposite views."},
{w:"Conceal",p:"from",e:"I concealed this from him."},
{w:"Conceive",p:"of",e:"I cannot conceive of such cruelty."},
{w:"Concentrate",p:"on/upon",e:"You should concentrate on your studies."},
{w:"Concerned",p:"about/for/with/in/at",e:"I am much concerned about the result."},
{w:"Concession",p:"to",e:"The authorities made no concession to his age."},
{w:"Concur",p:"with/in/on",e:"I concur with you in your decision."},
{w:"Condemn",p:"to/for",e:"He was condemned to death for murder."},
{w:"Condole",p:"with/on",e:"We condoled with him on his loss."},
{w:"Conducive",p:"to",e:"Early rising is conducive to health."},
{w:"Confer",p:"on/with",e:"I shall confer with him about your prayer."},
{w:"Confess",p:"to",e:"I confess to this weakness."},
{w:"Confide",p:"in/to",e:"Confide in me. Confide your secret to me."},
{w:"Confidence",p:"in",e:"I have full confidence in your ability."},
{w:"Confident",p:"of",e:"He is confident of success."},
{w:"Confined",p:"in/to",e:"He is confined in jail."},
{w:"Conform",p:"with/to",e:"I conform with you on this point."},
{w:"Confront",p:"with",e:"He was confronted with a very difficult situation."},
{w:"Confuse",p:"with",e:"Don't confuse liberty with licence."},
{w:"Congenial",p:"to",e:"This climate is congenial to my health."},
{w:"Congratulate",p:"on",e:"I congratulate you on your success."},
{w:"Connected",p:"with",e:"I am connected with that paper."},
{w:"Conscious",p:"of",e:"I am conscious of my weakness."},
{w:"Consequent",p:"on/upon",e:"Consequent on the failure of the bank, many people have lost their all."},
{w:"Consent",p:"to",e:"He consented to my proposal."},
{w:"Consideration",p:"for",e:"Show some consideration for his youth."},
{w:"Consist",p:"of/in",e:"My family consists of six members. True happiness consists in contentment."},
{w:"Consistent",p:"with",e:"Your action is not consistent with your principles."},
{w:"Conspicuous",p:"for/by",e:"He was conspicuous for his memory."},
{w:"Conspire",p:"against/with",e:"They conspired against the leader."},
{w:"Consult",p:"with",e:"I consulted with him on that matter."},
{w:"Contact",p:"with",e:"I have no contact with him."},
{w:"Contemporary",p:"of/with",e:"Akbar was a contemporary of Elizabeth."},
{w:"Contempt",p:"for/of",e:"I have a great contempt for him."},
{w:"Contend",p:"with/for",e:"He had to contend for the prize with a strong rival."},
{w:"Contented",p:"with",e:"He is contented with a little."},
{w:"Contiguous",p:"to",e:"His house is contiguous to mine."},
{w:"Contingent",p:"on/upon",e:"Success is contingent upon the reception it gets."},
{w:"Contrast",p:"to/with/between",e:"Your action is a contrast to your profession."},
{w:"Contrary",p:"to",e:"You acted contrary to orders."},
{w:"Contribute",p:"to",e:"Contribute something to this fund."},
{w:"Control",p:"of/over",e:"He has no control over himself."},
{w:"Convenient",p:"to",e:"Come anytime convenient to you."},
{w:"Converge",p:"on",e:"People converged on the parade ground."},
{w:"Conversant",p:"with",e:"I am conversant with the history of the case."},
{w:"Converse",p:"with/on/about",e:"I shall converse with him on the matter."},
{w:"Converted",p:"to/into",e:"My joy was converted into sorrow."},
{w:"Convict",p:"of",e:"He was convicted of theft."},
{w:"Convince",p:"of",e:"I am convinced of your honesty."},
{w:"Co-operate",p:"with/in",e:"I hope you will co-operate with me in this mission."},
{w:"Cope",p:"with",e:"I cannot cope with so much work."},
{w:"Correspond",p:"with/to",e:"I shall correspond with him about the matter."},
{w:"Count",p:"upon",e:"I count upon your help."},
{w:"Counter",p:"to",e:"They acted counter to the leader's wishes."},
{w:"Covetous",p:"of",e:"He is covetous of wealth."},
{w:"Crave",p:"for",e:"He craves for wealth."},
{w:"Credit",p:"to/with",e:"I credit him with good sense."},
{w:"Credence",p:"to",e:"I do not give much credence to his report."},
{w:"Culminate",p:"in",e:"His misfortunes culminated in bankruptcy."},
{w:"Cure",p:"of/for",e:"He is cured of his disease. Have you a cure for it?"},
{w:"Dawn",p:"on",e:"The truth at last dawned on me."},
{w:"Deaf",p:"to",e:"He is deaf to entreaty."},
{w:"Deal",p:"with/in",e:"He deals in rice. This book deals with music."},
{w:"Debar",p:"from",e:"He was debarred from voting."},
{w:"Decide",p:"upon/against",e:"The case was decided against him."},
{w:"Dedicate",p:"to",e:"He dedicated the book to his mother."},
{w:"Deduce",p:"from",e:"I deduced the truth from his remarks."},
{w:"Defend",p:"from/against",e:"I shall defend you from your enemy."},
{w:"Deficient",p:"in",e:"He is deficient in learning."},
{w:"Defer",p:"to",e:"The discussion was deferred to the next meeting."},
{w:"Delegate",p:"to",e:"The power was delegated to the subordinates."},
{w:"Deliberate",p:"upon",e:"We deliberated long upon the matter."},
{w:"Delete",p:"from",e:"His name was deleted from the list."},
{w:"Delight",p:"in",e:"He finds delight in books."},
{w:"Delighted",p:"at/with",e:"The child is delighted with his toys."},
{w:"Deliver",p:"from",e:"He delivered me from the trouble."},
{w:"Delve",p:"into",e:"You should delve into the old manuscripts."},
{w:"Demand",p:"from/of/for",e:"He demanded the amount from me."},
{w:"Demur",p:"to",e:"I do not demur to your request."},
{w:"Depend",p:"upon",e:"You can depend upon my word."},
{w:"Dependent",p:"on",e:"He is dependent on me."},
{w:"Deprive",p:"of",e:"He was deprived of all power."},
{w:"Depute",p:"to",e:"He was deputed to attend the meeting."},
{w:"Derived",p:"from",e:"What is your income derived from?"},
{w:"Derogatory",p:"to",e:"This is derogatory to his honour."},
{w:"Descend",p:"from",e:"The Rajputs claim to be descended from Sri Ramachndra."},
{w:"Deserving",p:"of",e:"His conduct was deserving of praise."},
{w:"Desire",p:"for/of",e:"He has no desire for wealth."},
{w:"Desirous",p:"of",e:"He is not desirous of wealth."},
{w:"Desist",p:"from",e:"He desisted from the attempt."},
{w:"Despair",p:"of",e:"He despairs of success."},
{w:"Destined",p:"for/to",e:"He is destined for or to that service."},
{w:"Destitute",p:"of",e:"I am destitute of any friend here."},
{w:"Destructive",p:"of/to",e:"Drinking is destructive of health."},
{w:"Detach",p:"from",e:"He became detached from his friends."},
{w:"Deter",p:"from",e:"He was deterred from going there."},
{w:"Determined",p:"on",e:"He is determined on going home."},
{w:"Detract",p:"from",e:"This defect detracts from his fame."},
{w:"Detrimental",p:"to",e:"Drinking is detrimental to health."},
{w:"Deviate",p:"from",e:"I cannot deviate from truth."},
{w:"Devoid",p:"of",e:"Your story is devoid of truth."},
{w:"Devolve",p:"upon/to",e:"The property devolved upon him."},
{w:"Devote",p:"to",e:"Devote some time to prayer every day."},
{w:"Differ",p:"from/in/with/about",e:"This thing differs from that in colour. I differ with you on this point."},
{w:"Difference",p:"between",e:"What is the difference between the two?"},
{w:"Different",p:"from",e:"This thing is different from that."},
{w:"Diffident",p:"of",e:"I am diffident of success."},
{w:"Digress",p:"from",e:"The lecturer temporarily digressed from her subject."},
{w:"Disagree",p:"with",e:"I disagreed with him on that point."},
{w:"Disappointed",p:"at/of/in/with",e:"He was disappointed at not getting it at all."},
{w:"Disapprove",p:"of",e:"We strongly disapproved of the changes."},
{w:"Discriminate",p:"between/against",e:"Do not discriminate good boys from bad ones."},
{w:"Disdain",p:"for",e:"He showed a disdain for the law."},
{w:"Disgrace",p:"to",e:"He is a disgrace to his family."},
{w:"Disgusted",p:"with/at/by",e:"I am disgusted with his conduct."},
{w:"Dislike",p:"to/for/of",e:"I have a dislike to or for the boy."},
{w:"Dispense",p:"with",e:"I dispensed with his services."},
{w:"Displeased",p:"with/at",e:"I am displeased with him at his conduct."},
{w:"Dispose",p:"of",e:"Let us dispose of our work."},
{w:"Disproportionate",p:"to",e:"He possesses wealth disproportionate to his known income."},
{w:"Dispute",p:"with/about",e:"I had a dispute with him about that matter."},
{w:"Disqualified",p:"for/from",e:"He is over-age, and is disqualified for the examination."},
{w:"Dissent",p:"from",e:"I dissent from your views in this matter."},
{w:"Dissertation",p:"on",e:"Her dissertation on global warming was highly acclaimed."},
{w:"Dissimilar",p:"to",e:"This thing is dissimilar to that."},
{w:"Dissuade",p:"from",e:"I dissuaded him from opposing the leader."},
{w:"Distaste",p:"for",e:"He has a distaste for publicity."},
{w:"Distinct",p:"from",e:"These families are distinct from one another."},
{w:"Distinguish",p:"between",e:"Distinguish between the two."},
{w:"Distract",p:"from",e:"The loud music distracted me from study."},
{w:"Distrust",p:"of",e:"There is reason for your distrust of his honesty."},
{w:"Divert",p:"from/to",e:"He diverted his attention from the book to the crowd."},
{w:"Divest",p:"of",e:"He was divested of all power."},
{w:"Divide",p:"into/between/among",e:"It was divided into several parts."},
{w:"Domineer",p:"over",e:"He domineers over the whole class."},
{w:"Doubtful",p:"of/about",e:"There is no doubt about or of his honesty."},
{w:"Dream",p:"of/about",e:"She dreams of becoming a doctor."},
{w:"Drive",p:"at",e:"I know what you are driving at."},
{w:"Dubious",p:"of/about",e:"He feels dubious about his sincerity."},
{w:"Due",p:"to",e:"No money is due to me."},
{w:"Dull",p:"of/at",e:"He is dull of hearing. He is dull at Physics."},
{w:"Duty",p:"to",e:"You have a duty to your family."},
{w:"Dwell",p:"in/upon",e:"He dwells in this house. He dwelt long upon the subject."},
{w:"Eager",p:"for/after",e:"He is eager for the result."},
{w:"Easy",p:"of",e:"This place is not easy of access."},
{w:"Efface",p:"from",e:"Sun and rain has effaced the inscription from the plaque."},
{w:"Egress",p:"from",e:"The plan shows sufficient egress from the stadium."},
{w:"Eject",p:"from",e:"Lava ejected from the volcano destroyed the village."},
{w:"Elected",p:"to",e:"He was elected to the parliament."},
{w:"Elicit",p:"from",e:"I elicited the information from him."},
{w:"Eligible",p:"for",e:"He is eligible for the post."},
{w:"Eliminate",p:"from",e:"He was eliminated from the tournament."},
{w:"Emanate",p:"from",e:"Real strength emanates from learning."},
{w:"Embargo",p:"on",e:"The Government decided to lay an embargo on trade."},
{w:"Embark",p:"on/at/for",e:"We have to embark on a drive for donation of blood."},
{w:"Emerge",p:"from",e:"The tiger emerged from the jungle."},
{w:"Emigrate",p:"from/to",e:"He emigrated from India."},
{w:"Emit",p:"from",e:"Smoke is emitted from the chimney."},
{w:"Empty",p:"of",e:"The roads are empty of traffic."},
{w:"Enamoured",p:"of",e:"He is enamoured of this place."},
{w:"Encroach",p:"on",e:"Do not encroach on my land or right."},
{w:"Encumber",p:"with",e:"You should not be encumbered with unnecessary luggage."},
{w:"Endowed",p:"with",e:"He is endowed with talents."},
{w:"Engaged",p:"in/to",e:"I was engaged in some work. My daughter is engaged to his son."},
{w:"Engrossed",p:"in",e:"He was deeply engrossed in his studies."},
{w:"Enjoined",p:"on/upon",e:"This rule is enjoined upon all."},
{w:"Enmity",p:"towards",e:"I have no enmity towards him."},
{w:"Enraged",p:"with/at",e:"He is enraged with his keeper."},
{w:"Enter",p:"into/upon/for",e:"He entered into conversation with me. He entered for the examination."},
{w:"Entitled",p:"to",e:"He is entitled to a reward for honesty."},
{w:"Entrust",p:"with/to",e:"I entrusted him with the thing."},
{w:"Enveloped",p:"in",e:"She was enveloped in a fur cloack."},
{w:"Envious",p:"of",e:"I have no envy of his success."},
{w:"Equal",p:"in/to",e:"I am equal in rank with you."},
{w:"Equip",p:"with",e:"They equipped the boys with food and clothes."},
{w:"Equivalent",p:"to",e:"One dollar is equivalent to rupees forty three."},
{w:"Erase",p:"from",e:"The marks will have to be erased from his calculations."},
{w:"Err",p:"in",e:"The hunter erred in his calculations of the distance."},
{w:"Escape",p:"from",e:"There is no escape from death."},
{w:"Essential",p:"to",e:"Health is essential to success in life."},
{w:"Evict",p:"from",e:"The tenants were evicted from the house."},
{w:"Exact",p:"from",e:"He exacted a promise from me."},
{w:"Excel",p:"in",e:"He excels in painting."},
{w:"Exception",p:"to",e:"There is no exception to the rule."},
{w:"Excess",p:"of",e:"An excess of enthusiasm is not always helpful."},
{w:"Exchange",p:"for/with",e:"I often exchange ideas with him."},
{w:"Exclude",p:"from",e:"Minors are excluded from the list of voters."},
{w:"Exclusive",p:"of",e:"The price is exclusive of railway freight."},
{w:"Excuse",p:"from/for",e:"I excuse you from attendance."},
{w:"Exempt",p:"from",e:"I did not expect this from or of him."},
{w:"Expel",p:"from",e:"The man was expelled from the party."},
{w:"Expert",p:"at/in",e:"He is expert at the flute."},
{w:"Expose",p:"to",e:"Don't expose it to the sun."},
{w:"External",p:"to",e:"These are considerations external to the main issue."},
{w:"Extort",p:"from",e:"He tried to extort money from his friends."},
{w:"Extract",p:"from",e:"This is an extract from the poem 'Paradise Lost'."},
{w:"Exult",p:"over",e:"He exulted over his misfortune."},
{w:"Faith",p:"in",e:"Have faith in God."},
{w:"Faithful",p:"to",e:"The dog is faithful to its master."},
{w:"False",p:"to",e:"I cannot be false to him."},
{w:"Familiar",p:"with/to",e:"I am familiar with him. His face is familiar to me."},
{w:"Fancy",p:"for",e:"I had a fancy for some mushrooms in the dinner."},
{w:"Fatal",p:"to",e:"This mistake is fatal to his prospects."},
{w:"Favourable",p:"to",e:"His report is favourable to me."},
{w:"Favourite",p:"of",e:"He is the favourite of his master."},
{w:"Fearful",p:"of",e:"He is fearful of danger."},
{w:"Feed",p:"on",e:"Cows feed on grass."},
{w:"Feel",p:"for",e:"I feel for you in your trouble."},
{w:"Fight",p:"for/against",e:"He always fought for the poor with or against the rich."},
{w:"Fired",p:"with",e:"Fired with zeal, he set about his task."},
{w:"Fit",p:"for",e:"You are not fit for the post."},
{w:"Fitness",p:"for",e:"I doubt about his fitness for the task."},
{w:"Fond",p:"of",e:"He is fond of sweets."},
{w:"Fondness",p:"for",e:"He has great fondness for sweets."},
{w:"Foreign",p:"to",e:"Rudeness is foreign to his nature."},
{w:"Forgetful",p:"of",e:"He began to work forgetful of everything else."},
{w:"Fraught",p:"with",e:"The journey was all along fraught with danger."},
{w:"Frightened",p:"of",e:"Are you frightened of spiders?"},
{w:"Free",p:"from/of",e:"She is free from money worries."},
{w:"Frown",p:"on/at",e:"He frowned on or at the boys who created the trouble."},
{w:"Fruitful",p:"in",e:"Your labour is fruitful in clever tricks."},
{w:"Full",p:"of",e:"The cup is full of milk."},
{w:"Furnish",p:"with",e:"I furnished the committee with the information."},
{w:"Gifted",p:"with",e:"She is gifted with a sweet voice."},
{w:"Glad",p:"of/at",e:"I am glad of your success."},
{w:"Glance",p:"at",e:"Please glance at your success."},
{w:"Glory",p:"in",e:"I glory in your success."},
{w:"Good",p:"at",e:"He is good at cricket."},
{w:"Grab",p:"at",e:"He grabbed at his collars."},
{w:"Grateful",p:"to/for",e:"I am grateful to him for his help."},
{w:"Greedy",p:"of/for",e:"The shareholders are greedy of or for profit."},
{w:"Grieve",p:"at/for/over",e:"I am grieved at his conduct. He grieved over his dead friend."},
{w:"Grudge",p:"against",e:"He bears a grudge against me."},
{w:"Grumble",p:"at/over",e:"He grumbles at or about his lot."},
{w:"Guard",p:"against/from/over",e:"He guarded me from or against such mistakes."},
{w:"Guess",p:"at",e:"He guessed at the truth."},
{w:"Guilty",p:"of",e:"He is guilty of theft."},
{w:"Hail",p:"from",e:"We hail from Rajasthan."},
{w:"Hang",p:"on/from",e:"What do you hang on the wall?"},
{w:"Hanker",p:"after",e:"I do not hanker after wealth."},
{w:"Hard",p:"of",e:"He is hard of hearing."},
{w:"Harmful",p:"to",e:"Fruit juices can be harmful to children's teeth."},
{w:"Harp",p:"on",e:"He always harps on his misfortunes."},
{w:"Hatred",p:"of/for",e:"I have no hatred of or for him."},
{w:"Heed",p:"to",e:"Pay heed to what I say."},
{w:"Heedless",p:"of",e:"I shall go, heedless of that thing."},
{w:"Heir",p:"of/to",e:"He is the heir of his uncle's property. He is heir to his uncle's property."},
{w:"Hesitate",p:"at",e:"He hesitates at nothing."},
{w:"Hide",p:"from",e:"I hide nothing from you."},
{w:"Hinder",p:"from",e:"He was hindered from going."},
{w:"Hindrance",p:"to",e:"There is no hindrance to his going."},
{w:"Hinge",p:"upon",e:"The whole case hinges upon this point."},
{w:"Hint",p:"at",e:"I hinted at the coming trouble."},
{w:"Hopeful",p:"of",e:"I am hopeful of success."},
{w:"Hopeless",p:"of",e:"He is hopeless of success."},
{w:"Hostile",p:"to",e:"He is hostile to my plan."},
{w:"Hunt",p:"for/after",e:"We all hunt after happiness."},
{w:"Hurtful",p:"to",e:"The comments he made were very hurtful to her."},
{w:"Identical",p:"with",e:"Your opinion is identical with mine."},
{w:"Ignorant",p:"of",e:"He is ignorant of the fact."},
{w:"Ill",p:"with",e:"He is ill with fever."},
{w:"Immaterial",p:"to",e:"This point is immaterial to our case."},
{w:"Immersed",p:"in",e:"He is immersed in debt."},
{w:"Immune",p:"from/against/to",e:"He is immune from or against infection."},
{w:"Impart",p:"to",e:"Impart the knowledge of the thing to him."},
{w:"Impatient",p:"of/for",e:"He is impatient of delay under payment."},
{w:"Impediment",p:"to",e:"Such obsolete systems are great impediments to progress."},
{w:"Impervious",p:"to",e:"He is impervious to water.",g:"unaffected by"},
{w:"Implicated",p:"in",e:"He is implicated in the plot."},
{w:"Import",p:"into",e:"Watches are imported into Switzerland."},
{w:"Impose",p:"on/upon",e:"The task was imposed on him."},
{w:"Impute",p:"to",e:"Do not impute motives to him."},
{w:"Inaccessible",p:"to",e:"This place is inaccessible to outsiders."},
{w:"Inadequate",p:"for",e:"Our preparations were inadequate for the task."},
{w:"Incapable",p:"of",e:"He is incapable of doing such a thing."},
{w:"Incentive",p:"to",e:"This reward will be an incentive to greater exertion."},
{w:"Incidental",p:"to",e:"All expenses incidental to the meeting will be borne by the committee."},
{w:"Inclination",p:"to/for",e:"He has no inclination to or for study."},
{w:"Include",p:"in",e:"My name is included in the list."},
{w:"Incompatible",p:"with",e:"Such an action is incompatible with railway freight."},
{w:"Incongruous",p:"with",e:"You should not be incongruous with others."},
{w:"Inconsiderate",p:"of",e:"You should not be inconsiderate of others' feelings."},
{w:"Inconsistent",p:"with",e:"His actions are inconsistent with his principles."},
{w:"Incumbent",p:"upon",e:"It is incumbent upon you to warn the students."},
{w:"Inculcate",p:"upon",e:"His words inculcated the idea into my mind."},
{w:"Indebted",p:"to/for",e:"I am indebted to you for your help."},
{w:"Indicative",p:"of",e:"Their failure to act is indicative of their lack of interest."},
{w:"Independent",p:"of",e:"He is independent of my help."},
{w:"Indifferent",p:"to",e:"He is indifferent to my interests."},
{w:"Indignant",p:"with",e:"He is indignant with me."},
{w:"Indispensable",p:"to",e:"Your help is indispensable to me."},
{w:"Indulge",p:"in/with",e:"Do not indulge him with your support."},
{w:"Indulgent",p:"to",e:"He is indulgent to his son."},
{w:"Infected",p:"with",e:"This house is infected with small pox."},
{w:"Infer",p:"from",e:"What do you infer from his reply?"},
{w:"Inferior",p:"to",e:"This toy is inferior to that in quality."},
{w:"Infested",p:"with",e:"This room is infested with rats."},
{w:"Influenced",p:"by",e:"His decision was influenced by my advice."},
{w:"Inform",p:"of",e:"I informed him of it."},
{w:"Infringe",p:"on/upon",e:"These restrictions infringe on basic human rights."},
{w:"Infuse",p:"into",e:"He infused a new spirit into us."},
{w:"Inherent",p:"in",e:"This right is inherent in being a member of a group."},
{w:"Initiated",p:"into",e:"He was initiated into our party."},
{w:"Injurious",p:"to",e:"Smoking is injurious to health."},
{w:"Innocent",p:"of",e:"I am innocent of the charge."},
{w:"Inquire",p:"of/into",e:"I inquired of him about the matter. He is inquiring into the matter."},
{w:"Insensible",p:"to",e:"He is insensible to all sense of shame."},
{w:"Insensitive",p:"to",e:"He seems completely insensitive to criticism."},
{w:"Insight",p:"into",e:"The book presents fascinating insights into human relationships."},
{w:"Insist",p:"on",e:"He insists on my doing this."},
{w:"Instil",p:"into",e:"He instilled that idea into my mind."},
{w:"Intent",p:"on",e:"He is intent on going there."},
{w:"Interested",p:"in",e:"I take interest in this matter."},
{w:"Interfere",p:"with/in",e:"Do not interfere with me in this matter."},
{w:"Intervene",p:"in",e:"You should not intervene in the dispute."},
{w:"Intimate",p:"with",e:"I am intimate with him."},
{w:"Introduced",p:"to",e:"Why did you introduce him to my brother?"},
{w:"Intrude",p:"upon",e:"Did you intrude upon him, or into his leisure?"},
{w:"Invest",p:"with/in",e:"He was invested with full powers."},
{w:"Investigation",p:"of/into",e:"The investigation of the matter has started."},
{w:"Invite",p:"to",e:"I invited him to dinner."},
{w:"Involved",p:"in",e:"I am involved in debt."},
{w:"Irrelevant",p:"to",e:"Your remark is irrelevant to the point."},
{w:"Irrespective",p:"of",e:"The boys joined to do the task irrespective of caste and religion."},
{w:"Irritated",p:"at/with",e:"He is irritated at this disappointment."},
{w:"Issue",p:"from",e:"A bear issued from the forest."},
{w:"Jealous",p:"of",e:"He is jealous of my fame."},
{w:"Jeer",p:"at",e:"Do not jeer at him."},
{w:"Jest",p:"at",e:"Do not jest at another."},
{w:"Join",p:"with/in",e:"I join with you in your opposition to the bill."},
{w:"Judge",p:"by",e:"Do not judge a thing by its appearance."},
{w:"Jump",p:"at/to",e:"He jumped at the offer."},
{w:"Junior",p:"to",e:"He is junior to me in service."},
{w:"Jurisdiction",p:"over/in",e:"This court has no jurisdiction over cases of this type."},
{w:"Justification",p:"of/for",e:"What is the justification for his conduct?"},
{w:"Keen",p:"on",e:"She was keen on going to the party."},
{w:"Knock",p:"at/against",e:"She knocked her head against the wall."},
{w:"Labour",p:"under/for",e:"I have laboured under great difficulties."},
{w:"Lack",p:"of",e:"He is not under any lack of friends."},
{w:"Lacking",p:"in",e:"He is lacking in politeness."},
{w:"Lame",p:"of/in",e:"He is lame of or in one leg."},
{w:"Lament",p:"for/over",e:"There is no use lamenting for or over the past."},
{w:"Laugh",p:"at",e:"Do not laugh at the dwarf."},
{w:"Lavish",p:"of/upon",e:"He lavished favours upon me."},
{w:"Lean",p:"against/upon/to",e:"I lean upon your opinion."},
{w:"Lecture",p:"on",e:"Prof. Mitra delivered a lecture on nuclear fission."},
{w:"Level",p:"with",e:"This surface is in level with that."},
{w:"Liable",p:"to/for",e:"He is liable to get punishment for neglect of duty."},
{w:"Likeness",p:"to",e:"I knew him by his likeness to his father."},
{w:"Liking",p:"for",e:"He has a liking for me."},
{w:"Limit",p:"to",e:"There is a limit to my patience."},
{w:"Limited",p:"to",e:"Invitation was limited to members only."},
{w:"Listen",p:"to",e:"Listen to what he says."},
{w:"Live",p:"in/at/on/for",e:"He lives in Kolkata, and for a high ideal."},
{w:"Long",p:"for",e:"Everybody longs for happiness."},
{w:"Lost",p:"in/to",e:"He is lost to all sense of shame."},
{w:"Loyal",p:"to",e:"He is loyal to his master."},
{w:"Lust",p:"for",e:"He can do anything to satisfy his lust for power."},
{w:"Mad",p:"with/on",e:"He is mad with anger."},
{w:"Martyr",p:"to",e:"He died a martyr to Sita."},
{w:"Marry",p:"to",e:"Ram was married to Sita."},
{w:"Match",p:"for",e:"He is no match for me."},
{w:"Meddle",p:"with/in",e:"Do not meddle with his machine."},
{w:"Meditate",p:"upon",e:"He meditated upon the folly of his action."},
{w:"Meet",p:"with",e:"He has met with an accident."},
{w:"Menace",p:"to",e:"The careless driver is a menace to the other road users."},
{w:"Merge",p:"with/into",e:"Smaller states merged with the bigger ones."},
{w:"Mindful",p:"of",e:"Be mindful of your duties."},
{w:"Mix",p:"with",e:"I shall not mix with you."},
{w:"Mourn",p:"for",e:"We all mourn for him."},
{w:"Moved",p:"by/to/at/with",e:"He was moved to tears at the sight of my misery."},
{w:"Murmur",p:"at/against",e:"They murmur at their low wages."},
{w:"Muse",p:"on",e:"He mused long on life's changes."},
{w:"Natural",p:"to",e:"Such kindness is natural to him."},
{w:"Necessary",p:"for/to",e:"Industry is necessary for or to success."},
{w:"Necessity",p:"for/of",e:"What is the necessity for this book?"},
{w:"Need",p:"of",e:"I am in need of money."},
{w:"Neglect",p:"of/in",e:"He was fined for neglect of duty."},
{w:"Neglectful",p:"of",e:"You are neglectful of duty."},
{w:"Negotiate",p:"with",e:"We decided to negotiate with him on our wage revision."},
{w:"Notorious",p:"for",e:"The town is notorious for crime."},
{w:"Obedient",p:"to",e:"He was always obedient to his father's wishes."},
{w:"Object",p:"to",e:"I object to that remark."},
{w:"Objection",p:"to/against",e:"I have no objection to the proposal."},
{w:"Obliged",p:"to/for",e:"I am obliged to you for your kindness."},
{w:"Obligation",p:"to",e:"I am under no obligation to pay them any money."},
{w:"Oblivious",p:"of/to",e:"He sat quietly oblivious of his surroundings."},
{w:"Obsessed",p:"by/with",e:"He was obsessed with the idea."},
{w:"Obstacle",p:"to",e:"Poverty is often an obstacle to higher studies."},
{w:"Obstruction",p:"to",e:"The abandoned car was causing an obstruction to traffic."},
{w:"Occupied",p:"with/in",e:"He is occupied with his books."},
{w:"Occur",p:"to",e:"The idea never occurred to me."},
{w:"Offended",p:"with/at",e:"I am offended with your conduct."},
{w:"Offence",p:"against",e:"You have committed a serious offence against society."},
{w:"Open",p:"to",e:"Your plan is open to objection."},
{w:"Opportunity",p:"for/of",e:"This is your opportunity for action."},
{w:"Opposed",p:"to",e:"I am opposed to the proposal."},
{w:"Opposite",p:"to",e:"His house is opposite to mine."},
{w:"Opposition",p:"to",e:"He offered strong opposition to the bill."},
{w:"Opt",p:"for/out of",e:"I opted for mathematics as my additional subject."},
{w:"Originate",p:"with/from/in",e:"The idea originated with him."},
{w:"Oust",p:"from",e:"He was ousted from the society."},
{w:"Overcome",p:"with/by",e:"He was overcome with fatigue."},
{w:"Overwhelmed",p:"with/at",e:"He is overwhelmed with grief at his brother's death."},
{w:"Owe",p:"to",e:"I owe my all to him."},
{w:"Owing",p:"to",e:"He could not come owing to illness."},
{w:"Parallel",p:"to",e:"The straight line is parallel to that."},
{w:"Part",p:"from/with",e:"It is painful for a mother to part from her son."},
{w:"Partake",p:"of",e:"Let us partake of some food."},
{w:"Partial",p:"to",e:"He is partial to his friend."},
{w:"Particular",p:"about",e:"He is very particular about his health."},
{w:"Party",p:"to",e:"I am not a party to this decision."},
{w:"Passion",p:"for",e:"He has a passion for music."},
{w:"Patient",p:"under/of",e:"He is patient under difficulties."},
{w:"Patience",p:"with",e:"He lost all patience with me."},
{w:"Peculiar",p:"to",e:"That style of play is peculiar to him."},
{w:"Penetrate",p:"into/to",e:"The enemy penetrated into the village."},
{w:"Penitent",p:"for",e:"He is penitent for his faults."},
{w:"Persevere",p:"in",e:"He persevered in his attempts."},
{w:"Persist",p:"in",e:"He persisted in disturbing me."},
{w:"Pertain",p:"to",e:"The building and the land pertaining to it were sold off."},
{w:"Pertinent",p:"to",e:"Points pertinent to the subject only will be discussed."},
{w:"Pine",p:"for",e:"The exiles pined for their native country."},
{w:"Pity",p:"for",e:"Have pity for the poor."},
{w:"Play",p:"at/on/with",e:"They are playing at cricket. He is playing on a harp."},
{w:"Plead",p:"with/for/against",e:"He pleaded with me for justice."},
{w:"Pleased",p:"with/about/at",e:"I am pleased with him or about his conduct."},
{w:"Plunged",p:"in/into",e:"I found him plunged in thought. He plunged into the river."},
{w:"Point",p:"at/to",e:"He pointed his gun at me."},
{w:"Polite",p:"in/to",e:"He is polite in his manners, or to strangers."},
{w:"Ponder",p:"on/over",e:"Ponder well on or over my advice."},
{w:"Poor",p:"in",e:"Don't be poor in spirit."},
{w:"Popular",p:"with/for",e:"He is popular with all for his goodness."},
{w:"Possessed",p:"by/with/of",e:"He was found in possession of explosives."},
{w:"Possessive",p:"of/about",e:"Some parents are too possessive of their children."},
{w:"Precaution",p:"against",e:"Take precaution against cold."},
{w:"Prefer",p:"to",e:"I prefer health to wealth."},
{w:"Preferable",p:"to",e:"Health is preferable to wealth."},
{w:"Preference",p:"to/over/for",e:"I give him preference to or over his brother."},
{w:"Prejudice",p:"against",e:"I have no prejudice against intercaste marriage."},
{w:"Prejudicial",p:"to",e:"Smoking is prejudicial to health."},
{w:"Prelude",p:"to",e:"The song is a prelude to the main function."},
{w:"Pre-occupied",p:"with",e:"He was pre-occupied with his own problems."},
{w:"Prepare",p:"for/against",e:"He is preparing for the examination."},
{w:"Preparatory",p:"to",e:"He is packing up preparatory to departure."},
{w:"Present",p:"to/with",e:"I presented the book to my sister."},
{w:"Preside",p:"at/over",e:"He presided at the table, or over the meeting."},
{w:"Pretext",p:"for",e:"What is your pretext for opposing me?"},
{w:"Prevail",p:"on/with/over",e:"I prevailed on him to go home."},
{w:"Prevent",p:"from",e:"I prevented him from going."},
{w:"Preventive",p:"against",e:"Quinine is a preventive against malaria."},
{w:"Previous",p:"to",e:"Previous to that, he was a clerk."},
{w:"Prey",p:"to/upon",e:"He is a prey to greed. Anxiety preyed upon my mind."},
{w:"Pride",p:"in/on",e:"He takes pride in or prides himself on his rank."},
{w:"Prior",p:"to",e:"Prior to that, he was a clerk."},
{w:"Privy",p:"to",e:"A few generals were privy to a plot to overthrow the government."},
{w:"Probe",p:"into",e:"The police probed deep into her private life."},
{w:"Proceed",p:"with/to/from/against",e:"He proceeded with his work. I shall proceed against you in a court."},
{w:"Proficient",p:"in/at",e:"He is proficient in or at music."},
{w:"Profit",p:"by",e:"We profit by experience."},
{w:"Profitable",p:"to",e:"This transaction is profitable to me."},
{w:"Profuse",p:"in",e:"The garden is profuse in roses."},
{w:"Prohibit",p:"from",e:"I prohibited him from going."},
{w:"Promote",p:"to",e:"He has been promoted to a high post."},
{w:"Prompt",p:"in/at",e:"He is prompt in his answers. He is prompt at figures."},
{w:"Prone",p:"to",e:"He is prone to idleness."},
{w:"Proof",p:"against",e:"He is proof against temptation."},
{w:"Proportionate",p:"to",e:"Punishment should be proportionate to the offence."},
{w:"Protect",p:"from/against",e:"I shall protect you from or against dangers."},
{w:"Protest",p:"against",e:"The workers took to the streets to protest against the decision."},
{w:"Provide",p:"against/for/with",e:"You must provide against evil days."},
{w:"Pry",p:"into",e:"I do not like prying into your secrets."},
{w:"Purge",p:"of/from",e:"The club was purged of bad people."},
{w:"Pursuant",p:"to",e:"Pursuant to your orders, I went there yesterday."},
{w:"Qualified",p:"for",e:"He is qualified for the post."},
{w:"Quest",p:"for",e:"The quest for knowledge is an endless one."},
{w:"Quick",p:"at/of",e:"He is quick at figures, or of understanding."},
{w:"Quarrel",p:"with/about/for/over",e:"They quarrelled with one another about the house."},
{w:"Ready",p:"for/at/in",e:"We are ready for departure."},
{w:"Reason",p:"with/about",e:"Don't reason with me about that matter."},
{w:"Rebel",p:"against",e:"The soldiers rebelled against the king."},
{w:"Recommend",p:"to/for",e:"I recommended him to my friend for the job."},
{w:"Reconciled",p:"with/to",e:"He is reconciled with or to his friend."},
{w:"Recourse",p:"to",e:"Do not take recourse to unfair means."},
{w:"Recover",p:"from",e:"He has recovered from his illness."},
{w:"Reduced",p:"to",e:"He has been reduced to poverty."},
{w:"Refer",p:"to/for",e:"Refer the matter to him for inquiry."},
{w:"Reference",p:"to",e:"This has a reference to your letter dated 5th April."},
{w:"Refrain",p:"from",e:"I refrain from making any remark now."},
{w:"Regard",p:"for",e:"I have no regard for him."},
{w:"Regardless",p:"of",e:"He opposed me regardless of the consequences."},
{w:"Rejoice",p:"in/at",e:"No one rejoiced at their success more than she."},
{w:"Relation",p:"to/between",e:"What is the relation of the moon to the tides?"},
{w:"Relate",p:"to",e:"This letter relates to that."},
{w:"Related",p:"to",e:"I am related to him."},
{w:"Relevant",p:"to",e:"Your remark is not relevant to the point."},
{w:"Relieve",p:"of/from",e:"This will relieve you of or from pain."},
{w:"Rely",p:"on",e:"You may rely on my word."},
{w:"Remarkable",p:"for",e:"He is remarkable for his strength."},
{w:"Remedy",p:"for/against",e:"There is no remedy for this disease."},
{w:"Remind",p:"of",e:"I reminded him of his promise."},
{w:"Render",p:"into",e:"Render the passage into English."},
{w:"Repent",p:"of",e:"I repent of my rudeness."},
{w:"Repentance",p:"for",e:"I feel repentance for my rudeness."},
{w:"Replace",p:"by/with",e:"Replace this old chair by or with a new one."},
{w:"Replete",p:"with",e:"The note was replete with printing mistakes."},
{w:"Reply",p:"to",e:"I have sent a reply to his enquiry."},
{w:"Repose",p:"in/on",e:"Repose confidence in God."},
{w:"Require",p:"of",e:"I required a loan of him."},
{w:"Requisite",p:"for",e:"Sincerity and hard work are the chief requisites for success."},
{w:"Resemblance",p:"to/between",e:"She bears a striking resemblance to her sister."},
{w:"Resign",p:"from",e:"He resigned from the company."},
{w:"Resistance",p:"to",e:"The soldiers offered resistance to the enemy attack."},
{w:"Resolve",p:"into/upon",e:"Resolve the expression into factors."},
{w:"Resort",p:"to",e:"We must resort to force to put them down."},
{w:"Respect",p:"for",e:"I have great respect for him."},
{w:"Respectful",p:"to",e:"He is respectful to his elders."},
{w:"Respite",p:"from",e:"I need some respite from the heavy work."},
{w:"Respond",p:"to",e:"Respond to the roll-call."},
{w:"Responsible",p:"to/for",e:"I am responsible to the Board for my action."},
{w:"Rest",p:"with/upon",e:"It rests with you to grant my prayer."},
{w:"Restore",p:"to",e:"Restore his property to him."},
{w:"Restrain",p:"from",e:"He was restrained from taking a hasty decision."},
{w:"Restrict",p:"to",e:"Admission was restricted to students only."},
{w:"Result",p:"from/in",e:"Misery results from vice. Vice results in misery."},
{w:"Retire",p:"from/into/on",e:"He retired from service on a pension."},
{w:"Revenge",p:"on/for",e:"He took revenge on me for opposing him."},
{w:"Revolt",p:"against",e:"People revolted against the monarch."},
{w:"Reward",p:"with/for",e:"He rewarded me with the post for my help."},
{w:"Rich",p:"in",e:"India is rich in minerals."},
{w:"Rid",p:"of",e:"Get rid of your bad habit."},
{w:"Rivalry",p:"with/between",e:"I have no rivalry with him."},
{w:"Rob",p:"of",e:"The man robbed me of my all."},
{w:"Row",p:"with/over/about",e:"He is always rowing with his friends over trifling matters."},
{w:"Rude",p:"to/about",e:"Don't be rude to anybody."},
{w:"Sacred",p:"to",e:"The temple is sacred to Lord Bishnu."},
{w:"Sad",p:"at",e:"He was sad at leaving school."},
{w:"Saddle",p:"with",e:"I was saddled with the heavy tasks."},
{w:"Sanguine",p:"of",e:"I am sanguine of success."},
{w:"Satire",p:"on",e:"The novel is a stinging satire on Indian politics."},
{w:"Satisfied",p:"with/of",e:"I am satisfied with him."},
{w:"Satisfaction",p:"in/at/with",e:"I find satisfaction in helping the poor."},
{w:"Satisfactory",p:"to/for",e:"I hope this arrangement will be satisfactory to you."},
{w:"Saturated",p:"with",e:"His clothes were saturated with rain water."},
{w:"Safe",p:"from",e:"He is safe from danger."},
{w:"Search",p:"for",e:"We searched for it there."},
{w:"Secede",p:"from",e:"A group of people seceded from the party."},
{w:"Secure",p:"against/from",e:"The town is secure against attacks."},
{w:"Seek",p:"for/after",e:"We all seek after happiness."},
{w:"Senior",p:"to",e:"He is senior to me in service."},
{w:"Sensible",p:"of",e:"I am sensible of the risk I run."},
{w:"Sensitive",p:"to",e:"She is very sensitive to cold."},
{w:"Sentence",p:"to/for",e:"He was sentenced to death for murder."},
{w:"Sequel",p:"to/of",e:"The division of the land was a sequel to the agreement."},
{w:"Shame",p:"at/for",e:"I feel shame at or for your conduct."},
{w:"Shocked",p:"at",e:"I was deeply shocked at his behaviour."},
{w:"Short",p:"of",e:"I am short of funds."},
{w:"Shrink",p:"from",e:"He shrank from going there."},
{w:"Sick",p:"of/for",e:"I am sick of this idle life."},
{w:"Side",p:"with",e:"He sided with me."},
{w:"Silent",p:"about/on",e:"He is silent about or on that point."},
{w:"Similar",p:"to",e:"This thing is similar to that."},
{w:"Similarity",p:"of/with/between",e:"Point out the similarity of this with that."},
{w:"Simultaneously",p:"with",e:"They raised their hands simultaneously with the ruling party."},
{w:"Sin",p:"against",e:"You have sinned against God."},
{w:"Sink",p:"in/into/upon/under",e:"He sank in mud up to the knees."},
{w:"Slave",p:"to",e:"He is a slave to his passions."},
{w:"Slow",p:"of/at/in",e:"He is slow of speech or at figures."},
{w:"Slur",p:"on/over",e:"This will put a slur on his name."},
{w:"Smell",p:"of",e:"This glass smells of wine."},
{w:"Smile",p:"at/upon",e:"Fortune smiled upon him at last."},
{w:"Sneer",p:"at",e:"Don't sneer at me."},
{w:"Snatch",p:"at",e:"A drowning man snatches at a straw."},
{w:"Sorry",p:"for",e:"I am sorry for my mistake."},
{w:"Speak",p:"with/to/about/for/of/on",e:"I spoke to him about the matter."},
{w:"Specific",p:"for/against",e:"What is the specific for this poison?"},
{w:"Spite",p:"against",e:"He has a spite against me."},
{w:"Stain",p:"upon/with/in",e:"The cloth was stained with ink."},
{w:"Stand",p:"on/by/in/to/for/at",e:"I shall stand for my friends who stood by me."},
{w:"Stare",p:"at",e:"He stared at me."},
{w:"Start",p:"for/from/at",e:"He started from home for Calcutta."},
{w:"Startled",p:"at",e:"He was startled at my sudden entrance."},
{w:"Steeped",p:"in",e:"He is steeped in superstition."},
{w:"Stick",p:"to",e:"Stick to your point."},
{w:"Stickler",p:"for",e:"He is a stickler for punctuality."},
{w:"Strange",p:"to",e:"This name is strange to me."},
{w:"Stoop",p:"to",e:"I cannot stoop to such meanness."},
{w:"Subject",p:"to/of/for",e:"We were subjected to great hardships."},
{w:"Submit",p:"to",e:"The rebels submitted to the king."},
{w:"Subordinate",p:"to",e:"He is subordinate to me in service."},
{w:"Subscribe",p:"to",e:"I shall subscribe to the fund."},
{w:"Subsequent",p:"to",e:"This happened subsequent to my departure."},
{w:"Subsist",p:"on",e:"We subsist on rice."},
{w:"Substitute",p:"for",e:"Substitute single words for the following phrases."},
{w:"Succeed",p:"to/in",e:"He succeeded to his father's estates."},
{w:"Succumb",p:"to",e:"The pedestrian succumbed to the injuries."},
{w:"Sufficient",p:"for",e:"This amount is sufficient for our purpose."},
{w:"Suffer",p:"from/for",e:"I am suffering from malaria."},
{w:"Suitable",p:"for/to",e:"This house is not suitable for or to me."},
{w:"Suited",p:"to/for",e:"Your remark is not suited to the occasion."},
{w:"Superior",p:"to",e:"He is superior to me in all respects."},
{w:"Supplement",p:"to",e:"This volume is a supplement to that."},
{w:"Supply",p:"with/to",e:"He supplied us with food."},
{w:"Sure",p:"of",e:"I am sure of success."},
{w:"Surety",p:"for",e:"I stand surety for him."},
{w:"Surprised",p:"at/by",e:"I am surprised at or by his conduct."},
{w:"Susceptible",p:"to/of",e:"He is susceptible to cold."},
{w:"Suspect",p:"of",e:"I suspect him of treachery."},
{w:"Suspicious",p:"of",e:"He is suspicious of my motive."},
{w:"Sympathy",p:"for/with",e:"I have no sympathy for or with him."},
{w:"Sympathise",p:"with/in",e:"I sympathise with you in your misery."},
{w:"Talk",p:"with/to/about/of/over",e:"I was talking to or with Jones about it."},
{w:"Tamper",p:"with",e:"Take care that the records are not tampered with."},
{w:"Tantamount",p:"to",e:"His request was tantamount to a command."},
{w:"Taste",p:"of/for",e:"I have had some taste of misery. He has no taste for music."},
{w:"Temptation",p:"to",e:"The bicycle was a great temptation to the thieves."},
{w:"Testify",p:"to",e:"He testified to my honesty."},
{w:"Testimony",p:"to/of",e:"The incident stands testimony to his honesty."},
{w:"Thankful",p:"to/for",e:"I am thankful to you for your help."},
{w:"Think",p:"of/about",e:"What do you think of or about him?"},
{w:"Thirst",p:"for/after",e:"We all thirst for or after happiness."},
{w:"Threat",p:"to",e:"Drugs pose a major threat to our society."},
{w:"Threaten",p:"with",e:"The attacker threatened us with a gun."},
{w:"Tide",p:"over",e:"He has tided over the difficulty."},
{w:"Tired",p:"of/with",e:"I am tired of waiting, or with exertions."},
{w:"Title",p:"to/on",e:"He has no title to this plot of land."},
{w:"Tolerant",p:"of",e:"We must be tolerant of opposition."},
{w:"Touch",p:"at/upon/with",e:"He touched upon the subject in his speech."},
{w:"Toy",p:"with",e:"He toyed with the idea of setting up a free dispensary."},
{w:"Traitor",p:"to",e:"He proved to be a traitor to the country."},
{w:"Treat",p:"with/of/to",e:"This book treats of music."},
{w:"Tremble",p:"with",e:"The child trembled with fear."},
{w:"Trespass",p:"on",e:"A few people were trespassing on the private land."},
{w:"Tribute",p:"to",e:"They paid tribute to the departed soul."},
{w:"Triumph",p:"over",e:"He triumphed over his troubles."},
{w:"True",p:"to",e:"Be true to your word."},
{w:"Trust",p:"to/in",e:"You may trust the work to me. Trust in God."},
{w:"Turn",p:"to/into",e:"I turned to him for help."},
{w:"Tyrannise",p:"over",e:"He tyrannised over the people."},
{w:"Unaware",p:"of",e:"I was totally unaware of the incident."},
{w:"Uncalled",p:"for",e:"The statement was uncalled for."},
{w:"Uncared",p:"for",e:"The child was left uncared for."},
{w:"Uneasy",p:"about",e:"I am uneasy about the effect of his action."},
{w:"Unequal",p:"to",e:"He is unequal to the task."},
{w:"Unison",p:"with",e:"They act in unison with one another."},
{w:"Unite",p:"with",e:"I am now united with him."},
{w:"United",p:"to",e:"She is united in marriage to an engineer."},
{w:"Urge",p:"upon",e:"We urged the point upon his consideration."},
{w:"Use",p:"of/for/to",e:"What is the use of this? Have you any use for it?"},
{w:"Used",p:"to",e:"He is used to such hardships."},
{w:"Useful",p:"to/for",e:"This book is useful to students for success."},
{w:"Vain",p:"of",e:"She is vain of her dress."},
{w:"Vary",p:"from",e:"Your story varies from his."},
{w:"Variance",p:"with",e:"Your story is at variance with his."},
{w:"Versed",p:"in",e:"He is well versed in politics."},
{w:"Vest",p:"in/with",e:"That power was vested in me."},
{w:"Vexed",p:"with/at",e:"He is vexed with me for opposing him."},
{w:"Victim",p:"of/to",e:"He was a victim of the earthquake disaster."},
{w:"Victory",p:"over/against/for",e:"Bengal won a comfortable victory over Delhi."},
{w:"Vie",p:"with/in",e:"They vied with one another in their eagerness to honour me."},
{w:"View",p:"of/to",e:"In view of what you say, I pardon you this time."},
{w:"Vital",p:"to",e:"Rest and care are now vital to his health."},
{w:"Void",p:"of",e:"Your remark is void of any meaning."},
{w:"Vouch",p:"for",e:"Can you vouch for his honesty?"},
{w:"Vulnerable",p:"to",e:"He is vulnerable to criticism."},
{w:"Wait",p:"for/upon",e:"We waited for you at the corner."},
{w:"Want",p:"of",e:"I have no want of money now."},
{w:"Wanting",p:"in",e:"He is wanting in common sense."},
{w:"Warn",p:"of/against",e:"I warned him of his danger."},
{w:"Warrant",p:"for",e:"There is no warrant for such criticism."},
{w:"Weak",p:"in/of",e:"He is weak in mind and of intelligence."},
{w:"Weary",p:"of/with",e:"I am weary of their constant quarrel."},
{w:"Wink",p:"at",e:"Do not wink at your son's faults."},
{w:"Wish",p:"for",e:"I do not wish for riches."},
{w:"Witness",p:"against/for/to/of",e:"His clothes are a witness to his poverty."},
{w:"Wonder",p:"at",e:"We wondered at his ignorance."},
{w:"Worthy",p:"of",e:"He is worthy of praise."},
{w:"Yearn",p:"for/to",e:"We yearned for a glimpse of the popular leaders."},
{w:"Yield",p:"to",e:"The rebels yielded to the king."},
{w:"Zealous",p:"for/in",e:"He is zealous for freedom."},
{w:"Zest",p:"for",e:"I have no zest for the work now."}
];

/* ============================================================
   SETUP
   ============================================================ */
const PREP_POOL = ["to","of","for","from","in","on","at","with","into","upon","against","about","over","between","among","after","by","under","towards"];

function firstPrep(pstr){ return pstr.split("/")[0].trim(); }
function allPreps(pstr){ return pstr.split("/").map(s=>s.trim().toLowerCase()); }

// Try to load user-added custom entries
let CUSTOM = [];
try{
  const saved = localStorage.getItem("prep_custom_entries");
  if(saved) CUSTOM = JSON.parse(saved);
}catch(e){ /* storage unavailable; continue without it */ }

function allEntries(){ return DATA.concat(CUSTOM); }

/* ---------- Tabs ---------- */
document.getElementById("tabs").addEventListener("click", e=>{
  const btn = e.target.closest("button[data-panel]");
  if(!btn) return;
  document.querySelectorAll("nav.tabs button").forEach(b=>b.classList.remove("active"));
  document.querySelectorAll("section.panel").forEach(p=>p.classList.remove("active"));
  btn.classList.add("active");
  document.getElementById("panel-"+btn.dataset.panel).classList.add("active");
});

/* ---------- Dictionary ---------- */
const dictList = document.getElementById("dict-list");
const dictSearch = document.getElementById("dict-search");
const dictCount = document.getElementById("dict-count");
const letterJump = document.getElementById("letter-jump");

function renderDictionary(filter){
  const entries = allEntries().slice().sort((a,b)=>a.w.localeCompare(b.w));
  const f = (filter||"").trim().toLowerCase();
  const filtered = entries.filter(en=>
    !f || en.w.toLowerCase().includes(f) || en.p.toLowerCase().includes(f) || (en.g||"").toLowerCase().includes(f) || (en.bn||"").toLowerCase().includes(f) || en.e.toLowerCase().includes(f)
  );
  dictCount.textContent = filtered.length + " of " + entries.length + " entries";
  dictList.innerHTML = "";
  let lastLetter = "";
  filtered.forEach(en=>{
    const L = en.w[0].toUpperCase();
    if(L !== lastLetter){
      const h = document.createElement("div");
      h.className = "letter-heading";
      h.id = "letter-"+L;
      h.textContent = L;
      dictList.appendChild(h);
      lastLetter = L;
    }
    const c = document.createElement("div");
    c.className = "card";
    const glossEn = en.g ? `<div class="gloss entry-gloss-en">${en.g}</div>` : "";
    const glossBn = en.bn ? `<div class="gloss entry-gloss-bn bn">${en.bn}</div>` : "";
    c.innerHTML = `<h3>${en.w} <span class="prep-tag">${en.p}</span></h3>
      ${glossEn}${glossBn}
      <p class="ex">${en.e}</p>`;
    dictList.appendChild(c);
  });
  if(filtered.length===0){
    dictList.innerHTML = '<p class="count-note">No matches. Try a different search term.</p>';
  }
}

function buildLetterJump(){
  const letters = [...new Set(allEntries().map(en=>en.w[0].toUpperCase()))].sort();
  letterJump.innerHTML = "";
  letters.forEach(L=>{
    const b = document.createElement("button");
    b.textContent = L;
    b.addEventListener("click", ()=>{
      const target = document.getElementById("letter-"+L);
      if(target) target.scrollIntoView({behavior:"smooth", block:"start"});
    });
    letterJump.appendChild(b);
  });
}

dictSearch.addEventListener("input", ()=>renderDictionary(dictSearch.value));

/* ---------- Practice ---------- */
let score = {right:0, total:0};
let currentQ = null;

function pickQuestion(){
  const entries = allEntries();
  currentQ = entries[Math.floor(Math.random()*entries.length)];
  return currentQ;
}

function blankSentence(entry){
  const preps = allPreps(entry.p);
  let sentence = entry.e;
  let found = false;
  preps.forEach(p=>{
    if(found) return;
    const re = new RegExp("\\b"+p.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")+"\\b","i");
    if(re.test(sentence)){
      sentence = sentence.replace(re, "_____");
      found = true;
    }
  });
  return sentence;
}

function renderPracticeQuestion(){
  document.getElementById("practice-feedback").className = "feedback";
  const entry = pickQuestion();
  document.getElementById("practice-letter").textContent = entry.w;
  const mode = document.getElementById("practice-mode").value;
  const sentence = blankSentence(entry);
  document.getElementById("practice-q").innerHTML = `<strong>${entry.w}</strong>${entry.g? " ("+entry.g+")":""} â€” ${sentence}`;

  const area = document.getElementById("practice-answer-area");
  area.innerHTML = "";

  if(mode === "type"){
    const input = document.createElement("input");
    input.type = "text";
    input.className = "blank-input";
    input.placeholder = "prepositionâ€¦";
    input.id = "type-input";
    input.addEventListener("keydown", e=>{ if(e.key==="Enter") checkAnswer(); });
    area.appendChild(input);
    setTimeout(()=>input.focus(), 30);
  } else {
    const correct = allPreps(entry.p);
    const options = new Set(correct.slice(0,1));
    while(options.size < 4){
      options.add(PREP_POOL[Math.floor(Math.random()*PREP_POOL.length)]);
    }
    const opts = [...options].sort(()=>Math.random()-0.5);
    const ul = document.createElement("ul");
    ul.className = "mcq-options";
    opts.forEach(op=>{
      const li = document.createElement("li");
      const b = document.createElement("button");
      b.textContent = op;
      b.addEventListener("click", ()=>selectMcq(b, op, entry));
      li.appendChild(b);
      ul.appendChild(li);
    });
    area.appendChild(ul);
  }
}

function selectMcq(btn, chosen, entry){
  const correct = allPreps(entry.p);
  const buttons = btn.parentElement.parentElement.querySelectorAll("button");
  buttons.forEach(b=>b.disabled = true);
  score.total++;
  if(correct.includes(chosen.toLowerCase())){
    btn.classList.add("picked-correct");
    score.right++;
    showFeedback(true, entry);
  }else{
    btn.classList.add("picked-wrong");
    buttons.forEach(b=>{ if(correct.includes(b.textContent.toLowerCase())) b.classList.add("reveal-correct"); });
    showFeedback(false, entry);
  }
  updateScore();
}

function checkAnswer(){
  if(!currentQ) return;
  const mode = document.getElementById("practice-mode").value;
  if(mode !== "type") return;
  const input = document.getElementById("type-input");
  if(!input || input.disabled) return;
  const val = input.value.trim().toLowerCase();
  const correct = allPreps(currentQ.p);
  input.disabled = true;
  score.total++;
  if(correct.includes(val)){
    score.right++;
    showFeedback(true, currentQ);
  }else{
    showFeedback(false, currentQ);
  }
  updateScore();
}

function showFeedback(isCorrect, entry){
  const fb = document.getElementById("practice-feedback");
  fb.className = "feedback show " + (isCorrect ? "correct" : "wrong");
  fb.innerHTML = isCorrect
    ? "Correct! " + entry.w + " â†’ <strong>" + entry.p + "</strong>"
    : "Not quite. " + entry.w + " takes <strong>" + entry.p + "</strong>.";
}

function updateScore(){
  document.getElementById("practice-score").textContent = "Score: " + score.right + " / " + score.total;
}

document.getElementById("practice-check").addEventListener("click", checkAnswer);
document.getElementById("practice-next").addEventListener("click", renderPracticeQuestion);
document.getElementById("practice-mode").addEventListener("change", renderPracticeQuestion);
document.getElementById("practice-restart").addEventListener("click", ()=>{
  score = {right:0, total:0};
  updateScore();
  renderPracticeQuestion();
});

/* ---------- Question Bank ---------- */
const qbLetterSel = document.getElementById("qb-letter");
function buildQbLetterOptions(){
  const letters = [...new Set(allEntries().map(en=>en.w[0].toUpperCase()))].sort();
  letters.forEach(L=>{
    const opt = document.createElement("option");
    opt.value = L; opt.textContent = L;
    qbLetterSel.appendChild(opt);
  });
}

let qbShowKey = false;
let qbCurrentSet = [];

function shuffle(arr){ return arr.slice().sort(()=>Math.random()-0.5); }

function generateQuestionBank(){
  const type = document.getElementById("qb-type").value;
  const count = Math.max(5, Math.min(60, parseInt(document.getElementById("qb-count").value,10) || 10));
  const letter = qbLetterSel.value;
  let pool = allEntries();
  if(letter !== "all") pool = pool.filter(en=>en.w[0].toUpperCase()===letter);
  if(pool.length === 0){ pool = allEntries(); }
  const chosen = shuffle(pool).slice(0, Math.min(count, pool.length));
  qbCurrentSet = chosen.map(entry=>{
    const sentence = blankSentence(entry);
    let mcqOptions = null;
    if(type === "mcq"){
      const correct = firstPrep(entry.p);
      const options = new Set([correct]);
      while(options.size < 4){
        options.add(PREP_POOL[Math.floor(Math.random()*PREP_POOL.length)]);
      }
      mcqOptions = shuffle([...options]);
    }
    return {entry, sentence, mcqOptions};
  });
  renderQuestionBank(type);
}

function renderQuestionBank(type){
  const list = document.getElementById("qb-list");
  list.innerHTML = "";
  qbCurrentSet.forEach(q=>{
    const li = document.createElement("li");
    if(type === "blank"){
      li.innerHTML = `${q.sentence} <span class="qb-answer ${qbShowKey?'show':''}">(${q.entry.p})</span>`;
    }else{
      let optsHtml = "";
      q.mcqOptions.forEach(op=>{
        const isRight = op === firstPrep(q.entry.p);
        optsHtml += `<li${isRight && qbShowKey ? ' class="right"' : ''}>${op}</li>`;
      });
      li.innerHTML = `${q.sentence}<ol class="qb-mcq">${optsHtml}</ol>`;
    }
    list.appendChild(li);
  });
}

document.getElementById("qb-generate").addEventListener("click", generateQuestionBank);
document.getElementById("qb-toggle-key").addEventListener("click", (e)=>{
  qbShowKey = !qbShowKey;
  e.target.textContent = qbShowKey ? "Hide answer key" : "Show answer key";
  renderQuestionBank(document.getElementById("qb-type").value);
});
document.getElementById("qb-print").addEventListener("click", ()=>window.print());

/* ---------- Init ---------- */
buildLetterJump();
renderDictionary("");
buildQbLetterOptions();
renderPracticeQuestion();


/* ============================================================
   LANGUAGE TOGGLE (English / à¦¬à¦¾à¦‚à¦²à¦¾ / Mixed)
   ============================================================ */
(function(){
  const root = document.documentElement;
  const buttons = document.querySelectorAll("#lang-toggle button");
  const saved = localStorage.getItem("prep_lang") || "en";

  function setLang(lang){
    root.classList.remove("lang-en", "lang-bn", "lang-mixed");
    root.classList.add("lang-" + lang);
    buttons.forEach(b => b.classList.toggle("active", b.dataset.lang === lang));
    localStorage.setItem("prep_lang", lang);
    // Re-render dictionary so gloss visibility is correct
    if (typeof renderDictionary === "function" && document.getElementById("dict-search")) {
      renderDictionary(document.getElementById("dict-search").value);
    }
  }

  buttons.forEach(btn => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });

  setLang(saved);
})();


/* Register service worker for offline use */
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
  }
